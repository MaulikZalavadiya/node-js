const AysncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");


//@desc Register admin
//@route POST /api/admins/register
//@access Private
exports.registerAdminContoller = AysncHandler(async (req, res)=>{
    const {name, email, password} = req.body
        //check if admin exists
        const adminFound = await Admin.findOne({email});
        if(adminFound){
            throw new Error("Admin Exists");
        }
        //register
        const user = await Admin.create({
            name,email,password
        })
        res.status(201).json({
            status:'sucess',
            message:"Admin register successfully",
            data:user,
        })
});


//@desc Login admin
//@route POST /api/admins/login
//@access Private
exports.loginAdminContoller = async (req, res)=>{
    const { email, password } = req.body;
  try {
    //find user
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.json({ message: "Invliad login crendentials" });
    }
    if (user && (await user.verifyPassword(password))) {
        // save the user into request object
        req.userAuth = user;
      return res.json({ data: user });
    } else {
      return res.json({ message: "Invliad login crendentials" });
    }
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};


//@desc get all admins
//@route GET /api/admins
//@access Private
exports.getAdminsContoller =  (req, res)=>{
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
};


//@desc get single admin
//@route GET /api/admins/:id
//@access Private
exports.getAdminContoller = (req, res)=>{
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
};


//@desc update admin
//@route PUT /api/admins/:id
//@access Private
exports.updateAdminController = (req, res)=>{
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
};


//@desc delete admin
//@route DELETE /api/admins/:id
//@access Private
exports.deleteAdminController = (req, res)=>{
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
};

//@desc suspend teacher
//@route PUT /api/admins/suspend/teacher/:id
//@access Private
exports.suspendTeacherContoller =  (req, res)=>{
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
};

//@desc unsuspend teacher
//@route PUT /api/admins/unsuspend/teacher/:id
//@access Private
exports.unsuspendTeacherController = (req, res)=>{
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
};


//@desc withdrawing teacher
//@route PUT /api/admins/withdraw/teacher/:id
//@access Private
exports.withdrawTeacherConroller = (req, res)=>{
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
};


//@desc unwithdrawing teacher
//@route PUT /api/admins/unwithdraw/teacher/:id
//@access Private
exports.unwithdrawTeacherController = (req, res)=>{
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
};


//@desc publish exam
//@route PUT /api/admins/publish/exam/:id
//@access Private
exports.publishExamController = (req, res)=>{
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
};


//@desc unpublish exam
//@route PUT /api/admins/unpublish/exam/:id
//@access Private
exports.unpublishExamController = (req, res)=>{
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
};