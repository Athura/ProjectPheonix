const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Bring in our models
const Ticket = require('../../models/tickets');
const User = require('../../models/users');

const validatePostInput = require('../../validation/tickets');

// @route GET api/posts/test
// @desc Test the ticket route
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: 'Posts work!'
    });
});

module.exports = router;