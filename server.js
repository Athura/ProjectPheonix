const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const users = require('./routes/user-routes');
const restaurants = require('./routes/restauraunt-routes');

require('./config/passport')(passport);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected :D'))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Mounting our routes
app.use('/api/users', users);
app.use('/api/restaurants', restaurants);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});