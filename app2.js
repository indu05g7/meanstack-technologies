var express = require('express')
var app = express()
var server = app.listen(8000, function(){
console.log('Listening on port 8000...');
})
app.get('/', function (req, res) {
 res.send(' This is a Sample Example for Express.js ')
 })
