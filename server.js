var http = require("http");
var url = require("url");
var querystring = require("querystring");
var drawer = require("./drawer");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).query;
		pathname = querystring.parse(pathname);

		for( var k in pathname){

	  		console.log("Request for " + pathname[k] + " received");
	  		route(pathname[k], response);
		
		}


	  	response.writeHead(200, {"Content-Type": "text/plain"});
	  	


	  	response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");

}

exports.start = start;