const express = require('express');
const router = require('./controllers/router');
const enforceSSL = require('./middleware/security/enforceSSL');
const helmet = require('./middleware/security/helmet');
const runServer = require('./server/server');

//Initialize express object
const app = express();
//Enforce HTTPS connections
enforceSSL(app);
//Employ helmet module's security suite
helmet(app);
app.set("view engine", "ejs");
//Specify where the static files are located
app.use(express.static('public'));
//Router engine
router(app);
//Run server
runServer(app, 3000);
