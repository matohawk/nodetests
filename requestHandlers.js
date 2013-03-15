function start(){

	console.log("Request Handler 'start' called.");

}

function draw(){

	console.log("Request handler 'draw' was called.");

}

exports.start = start;
exports.draw = draw;