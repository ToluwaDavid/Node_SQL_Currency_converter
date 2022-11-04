const express = require('express'); //To create our server.
const cors = require("cors"); //To allow and redirect request resources.
// const  router = require("./routes"); //This is where our API routes will be defined


const app = express();
const port = process.env.PORT || 5000