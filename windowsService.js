// set up the following commands in package.json
//  "start": "node windowsService.js SetUp 2",
//  "stop": "node windowsService.js CleanUp"
var Service = require('node-windows').Service;
const args = process.argv;
var command = "install";
var instances = 1;
var port = 8888;

if (args.length > 2)
{
    command = args[2];
}

if (args.length > 3)
{
    instances = parseInt(args[3]);
}

if (args.length > 4)
{
    port = parseInt(args[4]);
}

var svc = new Service({
    name:"svg.badges",
    description: "SVG badges generator",
    script: "server.js",
    env: [
        {
            name: "INSTANCES",
            value: instances
        },
        {
            name: "PORT",
            value: port
        }
    ],
    wait: 2,
    grow: .5,
    maxRetries: 3
});

svc.on("install",function(){
    console.log("service installed");
    console.log("starting service..");
    svc.start();
});

svc.on("start", function(){
    console.log("service started");
});

svc.on("uninstall", function(){
    console.log("service uninstalled");
});

if (command === "SetUp")
{
    console.log("installing service..");
    svc.install();
}
else if (command === "CleanUp")
{
    console.log("uninstalling service..");
    svc.uninstall();
}
 
