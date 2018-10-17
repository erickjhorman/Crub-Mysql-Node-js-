// This file run all the app, server 
const express = require('express'); //To require express
const path = require('path');  //To join modules 
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();


//Importing routes
const loginRoutes = require('./routes/login');
const propietarioRoutes = require('./routes/propietario');
const VehiculoRoutes = require('./routes/vehiculo');
const multaRoutes = require('./routes/multa');


//Settings of the server 
app.set('port', process.env.PORT || 2000); // To check if exists a port in the server if not it'll use the default
app.set('view engine','ejs'); //To use ejs as a view engine
app.set('views' , path.join(__dirname, 'views')); //To show the path of the folder view

//middlewares
app.use(morgan('dev')); // Dev to show console messages 
app.use(myConnection(mysql, {
host:'localhost',
user: 'root',
password:'',
port:3306,
database:'transito'
}, 'single'));

app.use(express.urlencoded({extended:false})); //To interpret the information of the form sent)

//Routes 
//My server can use the routes now 
app.use('/', loginRoutes);
app.use('/propietario' , propietarioRoutes);
app.use('/' , VehiculoRoutes);
app.use('/' , multaRoutes);


//Static files to create css, boostrap
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/public/css', express.static(__dirname + '/css'));
//app.use('/public/js', express.static(__dirname + '/js'));
//app.use('/public/img', express.static(__dirname + '/img'));

/*app.listen(3000 , ()=>{ // To initial the server  
    console.log('Server on port 3000'); //The server listens on this port 
});*/


app.listen(app.get('port'), () => { // To initial the server  
    console.log('Server on port 2000'); //The server listens on this port 
});