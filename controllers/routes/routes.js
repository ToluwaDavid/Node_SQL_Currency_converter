const express = require('express')
const router = express.Router();
const dbcontroller = require('../dbcontroller/query')


// @desc Home page
//@route GET /api/home
//@access Public
router.get('/api/home', (req, res) => {
    res.send('Welcome')
})


// @desc Fetch all currency available
//@route GET /api/currency
//@access Public
router.get('/api/viewcurrencies', dbcontroller.viewcurrencies)



// @desc register users
//@route POST /api/adduser
//@access Public
router.post('/api/adduser', dbcontroller.adduser)

// @desc register users
//@route POST /api/adduser
//@access Public
router.post('/api/addcurrency', dbcontroller.addcurrency)



// @desc Fetch all users available
//@route GET /api/viewusers
//@access Public
router.get('/api/viewusers', dbcontroller.viewusers)

// // @desc register users
// //@route POST /api/adduser
// //@access Public
// router.post('/api/adduser', (req, res) => {
//     res.send('Add User')
// })

// @desc convert from one currency to another
//@route GET /api/convert
//@access Public
router.post('/api/convert', (req, res) => {
    res.send('Convert')
})

module.exports = router;