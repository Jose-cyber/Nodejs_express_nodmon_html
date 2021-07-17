const express = require('express');

const app = express();

const PORT  = 8080;

app.get("/", function(req, res){
    res.sendFile(__dirname + '/html/index.html');
});


app.listen(PORT, function(){
    console.log('servidor rodando');
});