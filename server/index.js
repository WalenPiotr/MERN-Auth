const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = require('express')();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(
    require('express-session')({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const PORT = process.env.PORT || 3001;
const IP = process.env.IP || '127.0.0.1';

app.use((request, response, next) => {
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        message: error.message || 'Something went wrong',
        error: error
    });
});

app.listen(PORT, IP, () => {
    console.log(`Server is running on  ${IP}:${PORT}`);
});
