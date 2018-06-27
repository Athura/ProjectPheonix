const keys = require('../config/keys');
const express = require('express');
const router = express.Router();

const yelpData = {};

const fetchAndParseYelpResults = async (url, params) => {
    const response = await request.get(url).query(params);
    return {
        ...yelpData
    }
}

// @route GET api/yelp/test
// @desc Test yelp route
// @access public
router.get('/test', (req, res) => res.json({ msg: 'Yelp works' }));

// @route GET api/yelp/
// @desc this API sends a request to Yelp for information
// @access public
router.get('https://api.yelp.com/v3/businesses/search?term=:term&location=:loca', (req, res) => {
    let options = {
        search: req.param.term,
        location: req.param.location,
        sortBy: req.param.sortBy,
        headers: keys.yelpClientKey
    };
})



