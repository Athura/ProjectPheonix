const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string(),
    ssoUserName: Joi.String().required(),
    password: Joi.string().min(4).max(30).required(),
    avatar: Joi.string(),
    date: Joi.date()
});

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     ssoUserName: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     avatar: {
//         type: String,
//         required: false
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = User = mongoose.model('users', UserSchema);