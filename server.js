var cluster = require('cluster');
var control = require('strong-cluster-control');
const args = process.argv;
var instances = process.env.INSTANCES || 1;
var port = process.env.PORT || 9000;

cluster.SCHED_RR;

if (args.length > 2){
	instances = parseInt(args[2]);
}

// if (args.length > 3)
// {
// 	port = parseInt(args[3]);
// }

control.start({
    size: instances || control.CPUS,
	throttleDelay : 5000
}).on('error', function(error) {
    console.error(error);
});

if(cluster.isWorker) {
    var app = require('./src/badgesApp');

	app.listen(port, function(){
		console.log("Server is up and running with process Id " + process.pid + ". Listening on port: " + port);
	});
}