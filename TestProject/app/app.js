const express = require('express');
const morgan = require('morgan');

const app = express();

//Middlewares
app.use(morgan("dev"));

//Routes
//admin register
app.post('/api/v1/admins/register', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin has been registered"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//admin login
app.post('/api/v1/admins/login', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin has been login"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//Get all admin
app.get('/api/v1/admins', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"All Admins"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//Get single admin
app.get('/api/v1/admins/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Single Admin"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//update admin
app.put('/api/v1/admins/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"update Admin"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//delete admin
app.delete('/api/v1/admins/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"delete Admin"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

//admin suspending teacher
app.put('/api/v1/admins/suspend/teacher/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin suspend teacher"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});


//admin unsuspending teacher
app.put('/api/v1/admins/unsuspend/teacher/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin unsuspend teacher"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});


//admin withdrawing teacher
app.put('/api/v1/admins/withdraw/teacher/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin withdraw teacher"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});


//admin unwithdrawing teacher
app.put('/api/v1/admins/unwithdraw/teacher/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin unwithdraw teacher"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});


//admin publish exam results
app.put('/api/v1/admins/publish/exam/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin publish exam result"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});


//admin unpublish exam results
app.put('/api/v1/admins/unpublish/exam/:id', (req, res)=>{
    try {
        res.status(201).json({
            status:'sucess',
            data:"Admin unpublish exam result"
        })
    } catch (error) {
        res.json({
            status:'failed',
            error:error.message
        })
    }
});

module.exports = app;