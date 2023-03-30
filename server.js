require('dotenv').config();
const http = require("http");
require('./TestProject/config/dbConnect.js')
const app = require("./TestProject/app/app.js");
// console.log(app)
const port = process.env.PORT || 2000;


// server
const server = http.createServer(app)
server.listen(port, () => console.log(`listening on http://localhost:${port}`));
