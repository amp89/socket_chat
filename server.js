import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import assert from 'assert';

import config from './config';

//import bcrypt from 'bcrypt';
//import passport from 'passport'
//import session from 'express-session'

const app = express();




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended:true}));


app.get("/test",(req,res) => {
    res.send("Hello Friend.");
});


const server = app.listen(config.port, config.host, () => {
    console.log("Listenning on PORT ",config.port," @ ", config.host);
});
