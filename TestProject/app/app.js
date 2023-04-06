const express = require("express");
const adminRouter = require("../routes/staff/adminRouter");
const {globalErrHandler, notFoundErrHandler} = require("../middlewares/globalErrHandler");

const app = express();

//Middlewares
app.use(express.json()); //pass incoming json data


// app.use(isLogin, isAdmin);
//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

// Error Middlewares
app.use(notFoundErrHandler);
app.use(globalErrHandler);

module.exports = app;