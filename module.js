const http=require("http");
var lmodule=require("./module2");
var server=http.createServer((req,res)=>{
	res=lmodule.findBiggestNumber(220,100);
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<html><body><h1>"The Biggest Number of Two Numbers is:"+result+"</h1></body></html>");
	res.end();
	console.log("Request received");
});
	server.listen(3020);
	console.log("Server is running at port 3020");