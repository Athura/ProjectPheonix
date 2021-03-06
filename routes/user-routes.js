const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const gravatar = require('gravatar');
const wrap = require('./async-wrapper');

const validateRegisterInput = require('../../validators/register');
const validateLoginInput = require('../../validators/login');

// user controller
const UserController = require('../controllers/user-controller');

// user validator

// middleware functions
const addUserUID = require('../middleware/add-user-uid');

const User = require('../../models/users');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ ssoUserName: req.body.ssoUserName }).then(user => {
      if (user) {
        errors.ssoUserName = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(req.body.ssoUserName, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });
  
        const newUser = new User({
          name: req.body.name,
          ssoUserName: req.body.ssoUserName,
          avatar,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const ssoUserName = req.body.ssoUserName;
    const password = req.body.password;
  
    // Find user by ssoUserName
    User.findOne({ ssoUserName }).then(user => {
      // Check for user
      if (!user) {
        errors.ssoUserName = 'User not found';
        return res.status(404).json(errors);
      }
  
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            keys.jsonWebKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        }
      });
    });
  });

  // @route GET api/users/current
  // @desc Return the current user
  // @access Private
  router.get('/current', passport.authenticate('jwt', { session: false }) ,(req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        ssoUserName: req.user.ssoUserName
    });
  });

module.exports = router;