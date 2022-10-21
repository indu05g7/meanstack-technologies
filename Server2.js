var http=require('http');
http.createServer(function(rreq,res)
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write("<body bgcolor='pink'>");
		res.write("<h1>welcome to Node js</h1>");
		res.end();
	}).listen(4041);
console.log("Server 4041 has started");