const express = require('express');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();

// Use this route to verify the user is authenticated
// and get credentials. AKA if req.user, you have a session
router.get('/user', (request, response, next) => {
    if (request.user) {
        return response.status(200).json({
            user: request.user,
            authenticated: true
        });
    } else {
        return response.status(401).json({
            error: 'User is not authenticated',
            authenticated: false
        });
    }
});

function login(request, response, next) {
    passport.authenticate('local', function(error, user, info) {
        if (error) {
            return next(error);
        }
        if (!user) {
            return next({
                status: 400,
                message: 'Invalid username or password.'
            });
        }
        request.logIn(user, function(error) {
            if (error) {
                return next(error);
            }
            return response.status(200).send({
                user: { id: user.id, username: user.username },
                message: 'Succesfully logged in'
            });
        });
    })(request, response, next);
}

function register(request, response, next) {
    User.register(
        new User({ username: request.body.username }),
        request.body.password
    )
        .then(() => login(request, response, next))
        .catch(error => response.status(500).send({ error: error.message }));
}

router.post('/register', (request, response, next) => {
    register(request, response, next);
});

router.post('/login', (request, response, next) => {
    login(request, response, next);
});

router.get('/logout', (request, response, next) => {
    request.logout();
    request.session.save(error => {
        if (error) {
            return next(error);
        }
        response.status(200).send({
            message: 'Succesfully logged out'
        });
    });
});

module.exports = router;
