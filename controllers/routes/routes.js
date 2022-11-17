const express = require('express')
const router = express.Router();
const dbcontroller = require('../dbcontroller/query')
const testController = require('../dbcontroller/testController')


// @desc Home page
//@route GET /api/home
//@access Public
router.get('/api/home', (req, res) => {
    res.send('Welcome')
})


// @desc Fetch all currency available
//@route GET /api/viewcurrencies
//@access Public
router.get('/api/viewcurrencies', dbcontroller.viewcurrencies)



// @desc register users | registers a new user
//@route POST /api/adduser
//@access Public
router.post('/api/adduser', dbcontroller.adduser)

// @desc register/ add a new currency
//@route POST /api/addcurrency
//@access Public
router.post('/api/addcurrency', dbcontroller.addcurrency)


// @desc add a currency pair
//@route POST /api/addcurrencypair
//@access Public
router.post('/api/addcurrencypair', dbcontroller.addcurrencypair)


// @desc Fetch all users available
//@route GET /api/viewusers
//@access Public
router.get('/api/viewusers', dbcontroller.viewusers)


// @desc convert from one currency to another
//@route GET /api/convert
//@access Public
router.get('/api/convert', dbcontroller.convertpair)


router.post('/addTest', testController.addTest)

module.exports = router;