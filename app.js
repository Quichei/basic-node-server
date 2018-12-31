const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const database = require('./config/database');

const PORT = 2341;
// connect to database
mongoose.connect(database.url, {
    useNewUrlParser: true
}).then(
    () => {
        console.log('[i] db connection established.')
    },
    err => {
        console.warn('[E] db connection failed.')
    }
);

const app = express();


//Cors Middleware
app.use(cors());

// body parser Middleware
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, 'frontend')));

// passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passports/user-passport')(passport);


// import routes
const users = require('./routes/users');

// set routes
app.use('/users', users);


// app.get('/', (req, res) => {
//     res.json({foo: 'bar'})
// });
app.get('*', (req, res) => {
    res.json({
        foo: 'bar'
    })
});


app.listen(PORT, () => {
    console.log('Server Listening on port ' + PORT)
})