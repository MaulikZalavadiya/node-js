const globalErrHandler = (err, req,res,next)=>{
    //status
    //message
    //stack
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status :"faild";
    const statusCode = err.statusCode ? err.statusCode:500;
    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};

//not found middleware
const notFoundErrHandler = (req, res, next)=>{
    const err = new Error(`can't find ${req.originalUrl} on the server`)
    next(err);
};

module.exports = {globalErrHandler, notFoundErrHandler};