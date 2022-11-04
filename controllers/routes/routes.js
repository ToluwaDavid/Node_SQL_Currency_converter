const express = require('express')
const router = express.Router();


// @desc Fetch all currency available
//@route GET /api/currency
//@access Public
router.get('/api/home', (req, res) => {
    res.send('Welcome')
})


// @desc Fetch all users available
//@route GET /api/users
//@access Public
router.get('/api/users', (req, res) => {
    res.send('All users')
})

// @desc register users
//@route POST /api/adduser
//@access Public
router.post('/api/adduser', (req, res) => {
    res.send('Add User')
})

// @desc register users
//@route POST /api/adduser
//@access Public
router.post('/api/adduser', (req, res) => {
    res.send('Add User')
})

// @desc convert from one currency to another
//@route GET /api/convert
//@access Public
router.post('/api/convert', (req, res) => {
    res.send('Convert')
})

module.exports = router;