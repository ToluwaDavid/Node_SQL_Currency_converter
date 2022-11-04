const express = require('express'); //To create our server.
const cors = require("cors"); //To allow and redirect request resources.
const routes = require("./controllers/routes/routes"); //This is where our API routes will be defined
const conn = require('./services/db')

const app = express();
const port = process.env.PORT || 5000

app.use('/', routes)

pool

app.listen(port, () => { console.log(`Listening on port ${port}`) })