const express = require('express')
const router = express.Router();

//requiring the patients Model
const Patient = require('../models/patients')

//set up New route 'new.ejs'
router.get('/patients', (req, res) => {
    res.render('new.ejs')
})




module.exports = router;