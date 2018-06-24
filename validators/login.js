const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.ssoUserName = !isEmpty(data.ssoUserName) ? data.ssoUserName : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.ssoUserName)) {
    errors.ssoUserName = 'Email is invalid';
  }

  if (Validator.isEmpty(data.ssoUserName)) {
    errors.ssoUserName = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};