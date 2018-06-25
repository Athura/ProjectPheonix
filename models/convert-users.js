const mongoose = require('mongoose');
const joigoose = require('joigoose');

// Require in the user schema from users.js
const schema = require('./users');

// Convert Joi to mongoose schema
const mongooseSchema = joigoose.convert(schema);

// Modifying some fields with database specific instructions
mongooseScheme.ssoUserName.unique = true;

// Adding some fields which didn't make sense on the schema validator
mongooseSchema.updatedAt = { type: Date, default: Date.now };
mongooseSchema.createdAt = { type: Date, default: Date.now };

// define the mongoose model
const Users = mongoose.model('Users', mongooseSchema);

module.exports = Users;