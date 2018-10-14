// This file run all the app, server 
const express = require('express'); //To require express
const path = require('path');  //To join modules 
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//Settings of the server 
app.set('port', process.env.PORT || 3000); // To check if exists a port in the server if not it'll use the default
app.set('view engine','ejs'); //To use ejs as a view engine
app.set('views' , path.join(__dirname, 'views')); //To show the path of the folder view

//middlewares
app.use(morgan('dev')); // Dev to show console messages 
app.use(myConnection(mysql, {
host:'localhost',
user: 'root',
password:'',
port:3306,
database:'CrudNode'
}, 'single'));




/*app.listen(3000 , ()=>{ // To initial the server  
    console.log('Server on port 3000'); //The server listens on this port 
});*/


app.listen(app.get('port'), () => { // To initial the server  
    console.log('Server on port 3000'); //The server listens on this port 
});