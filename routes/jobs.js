const express = require('express')
const router = express.Router()
const Job = require('../models/Job') 

//detalhes da vaga 
router.get('/view/:id', (req,res) => {
    Job.findOne({
        where: {id: req.params.id}
    })
    .then(job => {
        res.render('view.handlebars',{job}) 
    })
    .catch(err => console.log(err))
})

//adicionar vaga
router.get('/add', (req,res) => {
    res.render('add.handlebars')
})

//insert
router.post('/add', (req,res) => {
    let {title, salary, company, description, email, new_job} = req.body  

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => {res.redirect('/')})
    .catch(err => console.log(err))
})

module.exports = router


