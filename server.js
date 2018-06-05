const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
//const tickets = require('./routes/api/tickets');

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

app.use('/api/users', users);
//app.use('/api/tickets', tickets);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});