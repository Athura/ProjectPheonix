const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load our validation
const validateProfileInput = require('../validators/profile-validator');

// Load our models
const Profile = require('../models/profile-model');
const User = require('../models/users');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'Profile Works'
}));

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all',
    (req, res) => {
        const errors = {};

        Profile.find()
            .populate('user', ['name', 'avatar'])
            .then(profiles => {
                if (!profiles) {
                    errors.noprofile = 'Sorry, we couldn\'t find any profiles.';
                    return res.status(404).json(errors);
                }
                res.json(profiles);
            })
            .catch(err => res.status(404).json({
                profile: 'Sorry, we couldn\'t find any profiles.'
            }));
    })

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get('/handle/:handle', (req,res) => {
    const errors = {};

    Profile.findOne({ handle: req.params.handle }) 
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'Sorry, there is no profile with this handle.';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/profile
// @desc    Gets the current user's profile
// @access  Private
router.get('/', passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const errors = {};

        Profile.findOne({
                user: req.user.id
            })
            .populate('user', ['name', 'avatar'])
            .then(profile => {
                if (!profile) {
                    errors.noprofile = 'Sorry, there is no profile for this user';
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
)

// @route   POST api/profile
// @desc    Create or edit the current user's profile
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const {
            errors,
            isValid
        } = validateProfileInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        //Get Fields
        const profileFields = {};
        profileFields.social = {};
        profileFields.user = req.user.id;
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;

        // Skills array - we use the split operator to add commas between each skill a user has provided. If a user has only provided 1 skill then there will not be a comma.
        if (typeof req.body.skills !== 'undefined') {
            profileFields.skills = req.body.skills.split(',');
        }

        // Social Fields - Here we hydrate our social object, initialized above, with the request's body
        if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
        if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
        if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
        if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
        if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

        Profile.findOne({
            user: req.user.id
        }).then(profile => {
            if (profile) {
                // Update the user's profile if it exists already
                Profile.findOneAndUpdate({
                    user: req.user.id
                }, {
                    $set: profileFields
                }, {
                    new: true
                }).then(profile => res.json(profile));
            } else {
                // Create a profile since the user's profile doesn't exist in our database. We also add a findOne check here to check if the user's provided handle already exists in the database. If it does then we throw an error
                Profile.findOne({
                    handle: profileFields.handle
                }).then(profile => {
                    if (profile) {
                        errors.handle = 'Sorry, this handle already exists.';
                        res.status(400).json(errors);
                    }

                    // Save profile. We get here if the provided handle is not found in the database
                    new Profile(profileFields).save().then(profile => res.json(profile));
                });
            }
        });
    }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        Profile.findOneAndRemove({
            user: req.user.id
        }).then(() => {
            User.findOneAndRemove({
                _id: req.user.id
            }).then(() => {
                res.json({
                    success: true
                })
            })
        })
    }
)

module.exports = router;