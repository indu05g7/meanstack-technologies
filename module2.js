const http=require("http");
var lmodule=require("./module1");
const prompt = require('prompt-sync')();
a=prompt("Enter:");
a=Number(a);
b=prompt("Enter:");
b=Number(b);
var server=http.createServer(function(req,res){
	result=lmodule.findBiggestNumber(a,b);
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>The Biggest Number of Two Numbers is:"+result+"</h1>");
	res.end();
	console.log("Request received");
});
	server.listen(3200);
	console.log("Server is running at port 3200");