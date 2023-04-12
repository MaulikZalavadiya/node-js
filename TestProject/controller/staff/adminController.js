const AysncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");


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
exports.loginAdminContoller = AysncHandler(async (req, res)=>{
    const { email, password } = req.body;
    //find user
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.json({ message: "Invliad login crendentials" });
    }
    if (user && (await user.verifyPassword(password))) {
        // save the user into request object
        // req.userAuth = user;
        // const token = generateToken(user._id);
        // const verify =  verifyToken(token)
      return res.json({ 
        data: generateToken(user._id),
        message: "Admin login sucessfully"
     });
    } else {
      return res.json({ message: "Invliad login crendentials" });
    }
  }
);

//@desc get all admins
//@route GET /api/admins
//@access Private
exports.getAdminsContoller = AysncHandler(
    async(req, res)=>{
        const admins = await Admin.find().select("-password -createdAt -updatedAt");
        res.status(200).json({
            status:"sucess",
            message:"admins fetched sucessfully",
            data:admins
        });
    }
);


//@desc get single admin
//@route GET /api/admins/:id
//@access Private
exports.getAdminProfileContoller = AysncHandler( async(req, res)=>{
    const admin = await Admin.findById(req.userAuth._id).select("-password -createdAt -updatedAt ");
    if(!admin){
        throw new Error("Admin not Found.")
    }else{
        res.status(200).json({
            status:"success",
            message:"Admin Profile fetched sucessfully",
            data:admin,
        });
    }
});


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