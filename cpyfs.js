var fs= require('fs');
fs.readFile('input.txt','utf8',function(err,data){
	if(err)
		console.log(err);
	console.log(data);
	fs.writeFile('text.txt',data,function(err){
		if(err)
			console.log(err);
		else
			console.log("Write operation.");
	});
	fs.appendFile('text.txt','Welcome to Node JS',function(err){
	if(err)
		console.log(err);
	else
		console.log('Append operation Completed');
     });
	fs.readFile('input.txt','utf8',function(err,data){
	if(err)
		throw err;
		console.log(data);
	});
});
console.log('Open File to Reading');