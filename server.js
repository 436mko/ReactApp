var express = require('express');


//Create your APP
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express servis up on port 3000');
});
