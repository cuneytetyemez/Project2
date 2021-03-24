const express = require('express')
const router = express.Router();

//requiring the patients Model
const Patient = require('../models/patients')

//setup index for patients

router.get('/', (req, res) => {
    res.render('home.ejs')
})

//patients show route
router.get('/confirm/:PIN', (req, res) => {
    Patient.findOne({PIN: req.params.PIN}, (err, foundPatient) => {
        console.log(req.params.PIN)
        console.log("below found Patient")
        console.log(foundPatient)
        res.render('show.ejs', {
        
            patient: foundPatient,
            // currentUser: req.session.currentUser
        })     
    })
 
})

//set up Destroy Route

router.delete('/:PIN', (req, res) => {
    Patient.findOneAndRemove(req.params.PIN, (err, data) =>{
        if( err) {
            console.log(err)

        }else {
            res.redirect('/')
        }
    })
})

//SET UP EDIT ROUTE
router.get('/:PIN/edit', (req, res) => {
    Patient.findOne({PIN:req.params.PIN}, (err, foundPatient) => {
        console.log(foundPatient)
        res.render('edit.ejs', {
            patient: foundPatient,
            // currentUser: req.session.currentUser
        } )
    })
})

//setup Update Route

router.put('/:PIN', (req, res) => {
    Patient.findOneAndUpdate({PIN:req.params.PIN}, req.body, {new: true}, (err, updatedPatient) => {
        res.redirect('/patients/confirm/' + req.params.PIN)
    })
})


//SET UP POST ROUTE "CREATE"

router.post('/', (req, res) => {
    
    Patient.create(req.body, (error, createdPatient) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            
            console.log(req.body)
            res.redirect('patients/confirm/' + req.body.PIN)
        }
    })
    
}) 


    

//set up Patient route 'new.ejs'
router.get('/new', (req, res) => {
    res.render('new.ejs')
})




module.exports = router;