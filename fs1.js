var fs=require('fs');
fs.readFile('first.js','utf8',function(err,data){
	if(err)
		throw err;
		console.log(data);});
	console.log('Open a File to Reading');