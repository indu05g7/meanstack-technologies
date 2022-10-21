var fs=require('fs');
data='Welcome to Node JS!';
fs.appendFile('input.txt',data,function(err){
	if(err)
		console.log(err);
	else
		console.log('Append operation Completed');
});
fs.readFile('input.txt','utf8',function(err,data){
	if(err)
		throw err;
		console.log(data);});
	console.log('Open a File to Reading');