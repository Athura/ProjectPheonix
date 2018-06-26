const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRestaurantInput(data) {
    let errors = {};

    data.restaurant = !isEmpty(data.restaurant) ? data.restaurant : '';
    data.location = !isEmpty(data.location) ? data.location : '';

    if (!Validator.isEmpty(data.restaurant)) {
        errors.text = 'Text field is required';
    }

    if (!Validator.isEmpty(data.location)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};