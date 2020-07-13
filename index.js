const express = require("express");
const mongoose = require("mongoose");
//var MongoClient = require('mongodb').MongoClient
 // , assert = require('assert');

const bodyParser = require("body-parser");
const app = express();
const {dbURI} = require("./config/keys");
const users = require("./routes/users");

//connect
//var url = 'mongodb://localhost/myproject';      
//module.exports.connectDb = () =>{
  mongoose.connect('mongodb://localhost/testdb', {useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false}).
then(() => console.log('Connected to Database SUCCESSFULLLLY !!!!')).
catch(err => console.error('Connection Error ${err}-->'+err));
//}

//MiddlY

app.use(bodyParser.urlencoded({extended: true}))

//Routes

app.use('/api/users', users);

//Listen

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening at Port ' +port));
