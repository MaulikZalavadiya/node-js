const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next)=>{
   //get token from header
   const headerObj = req.headers;
   const token= headerObj.authorization.split(" ")[1];
   //verify token
   const verifytoken = verifyToken(token);
   if (verifytoken){
    // find the admin
    const user = await Admin.findById(verifytoken.id).select('name email role');
    //save the user into request object
     req.userAuth = user;
     next();
    //  return verifytoken;
   }else{
    const err = new Error('Token Expired/Invelid');
    next(err);
   };
  

};

module.exports = isLogin;