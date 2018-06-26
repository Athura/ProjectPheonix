const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    restaurant: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    sortBy: {
        type: String,
        required: false
    }
});

module.exports = Restaurant = mongoose.model('restaurants', RestaurantSchema);