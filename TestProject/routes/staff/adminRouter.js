const express = require('express');

const adminRouter = express.Router()


//register
adminRouter.post("/register",  (req, res)=>{
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


//login
adminRouter.post("/login", (req, res)=>{
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

//get all
adminRouter.get("/", (req, res)=>{
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

//get single
adminRouter.get("/:id",(req, res)=>{
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
adminRouter.put("/:id", (req, res)=>{
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
adminRouter.delete("/:id", (req, res)=>{
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


//suspend teacher
adminRouter.put("/suspend/teacher/:id",  (req, res)=>{
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

//upspend teacher
adminRouter.put("/unsuspend/teacher/:id", (req, res)=>{
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

//withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", (req, res)=>{
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

//unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", (req, res)=>{
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

//publish exam results
adminRouter.put("/publish/exam/:id", (req, res)=>{
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

//unpublish exam results
adminRouter.put("/unpublish/exam/:id", (req, res)=>{
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







module.exports = adminRouter;