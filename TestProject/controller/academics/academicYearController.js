const AysncHandler = require("express-async-handler");
const AcademicYear = require("../../model/Academic/AcademicYear");
const Admin = require("../../model/Staff/Admin");
 
exports.createAcademicYear = AysncHandler(async(req, res) => {
    const {name,fromYear, toYear } = req.body;
    //check if exists
    const academicYear = await AcademicYear.findOne((name))
    if(academicYear){
        throw new Error('Academic year already exists')
    }
    //create
    const academicYearCreated = await AcademicYear.create({
        name,
        fromYear,
        toYear,
        createdBy:req.userAuth._id,

    }); 
    res.status(201).json({
        status:"success",
        message:"Academic year created successfully",
        data: academicYearCreated,
    });
    
});