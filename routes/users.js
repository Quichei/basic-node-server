const express = require('express');
const router = express.Router();
const passport = require('passport');


// Register
router.post('/', (req, res, next) => {
    res.json({
        foo: 'bar2'
    })
});

// Authenticate
router.get('/', (req, res, next) => {
    res.json({
        foo: 'bar3'
    })
});
router.get('/authed', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    res.json({
        foo: 'authed'
    })
});

module.exports = router;