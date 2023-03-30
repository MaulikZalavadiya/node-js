const mongoose = require('mongoose')
const dbConnect = async()=>{
    try {
        //console.log(process.env)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected Successfully ");
    } catch (error) {
        console.log("Db Connection Failed", error.message);
        
    }
}//buPrz9CjeGvZxg3V

dbConnect();