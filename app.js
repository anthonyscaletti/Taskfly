const express = require('express');
const router = require('./controllers/router');
const runServer = require('./server/server');

//Initialize express object
const app = express();
app.set("view engine", "ejs");
//Specify where the static files are located
app.use(express.static('public'));
//Router engine
router(app);
//Run server
runServer(app, 3000);
