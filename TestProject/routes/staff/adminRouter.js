const express = require('express');
const app = require("../../app/app");
const { registerAdminContoller, loginAdminContoller, getAdminsContoller,
     unpublishExamController, publishExamController, unwithdrawTeacherController, 
     withdrawTeacherConroller, unsuspendTeacherController, suspendTeacherContoller, 
     deleteAdminController, updateAdminController, getAdminProfileContoller } = require('../../controller/staff/adminController');
const  isLogin = require('../../middlewares/isLogin');

const adminRouter = express.Router()


//register
adminRouter.post("/register", registerAdminContoller);


//login
adminRouter.post("/login", loginAdminContoller);

//get all
adminRouter.get("/",isLogin, getAdminsContoller);

//get single
adminRouter.get("/profile",isLogin, getAdminProfileContoller);

//update admin
adminRouter.put("/:id", updateAdminController);


//delete admin
adminRouter.delete("/:id", deleteAdminController);


//suspend teacher
adminRouter.put("/suspend/teacher/:id", suspendTeacherContoller);

//upspend teacher
adminRouter.put("/unsuspend/teacher/:id", unsuspendTeacherController);

//withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", withdrawTeacherConroller);

//unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", unwithdrawTeacherController );

//publish exam results
adminRouter.put("/publish/exam/:id", publishExamController );

//unpublish exam results
adminRouter.put("/unpublish/exam/:id", unpublishExamController);







module.exports = adminRouter;