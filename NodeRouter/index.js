const express = require('express');
const app = express();
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/customer.html',function(req,res){
    res.sendFile( __dirname + "/" + "customer.html" );  
});

app.get('/',function(req,res){
    //res.send("I am from home page");
    res.sendFile( __dirname + "/" + "customer.html" ); 
});

app.get('/about',function(req,res){
    res.send("I am from about page");
});

app.get('/contact',function(req,res){
    res.send("I am from contact page");
});

app.get('/customer',function(req,res){
    //console.log(req.body.name);
    res.send("My Name is "+req.query.myname+" My address is "+req.query.address);
    //res.send("My address is "+req.query.address);
    //res.send("I am the customer");
});

app.post('/customer',urlencodedParser,function(req,res){
    //res.send("POST Method");
    res.send("My Name is "+req.body.myname+" My address is "+req.body.address);
});

app.get('/*',function(req,res){
    res.send("404 Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running PORT on ${PORT}`);
});