const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../config/keys');

const Restaurant = require('../models/restaurant-model');
const validateRestaurantInput = require('../validators/restaurant-validator');

// @route GET api/restaurants/test
// @desc Test restaurant functionality
// @access Public
router.get('/test', (req,res) => res.json({ msg: 'Restaurants work' }));

// @route GET api/restaurants/yelp
// @desc Search Yelp restaurants
// @access Public
router.get('/yelp', (req, res) => {
    
})


// @route   POST api/restaurants/follow
// @desc    Follow Restaurant
// @access  Private

module.exports = router;