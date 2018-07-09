const Validator = require('validator');
const isEmpty = require ('./is-empty.js');

module.exports = function validateProfileInputs(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'A unique profile handle is required.';
    }

    if (Validator.isLength(data.handle, { min: 6, max: 20 })) {
        errors.handle = 'Your profile handle must be a minimum of 6 characters or a maximum of 20.'
    }

    if (Validator.isLength(data.bio, { min: 10, max: 300 })) {
        errors.bio = 'Your biography must be a minimum of 10 characters or a maximum of 300.'
    }

    if (!isEmpty(data.youtube)) {
        if (!Validator.isURL(data.youtube)) {
            errors.youtube = 'The YouTube URL you provided is not a valid URL.';
        }
    }

    if (!isEmpty(data.twitter)) {
        if (!Validator.isURL(data.twitter)) {
            errors.twitter = 'The Twitter URL you provided is not a valid URL.';
        }
    }

    if (!isEmpty(data.Facebook)) {
        if (!Validator.isURL(data.Facebook)) {
            errors.Facebook = 'The Facebook URL you provided is not a valid URL.';
        }
    }

    if (!isEmpty(data.linkedin)) {
        if (!Validator.isURL(data.linkedin)) {
            errors.linkedin = 'The LinkedIn URL you provided is not a valid URL.';
        }
    }

    if (!isEmpty(data.instagram)) {
        if (!Validator.isURL(data.instagram)) {
            errors.instagram = 'The Instagram URL you provided is not a valid URL.';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};