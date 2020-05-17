var express = require('express');
var app = express();
var badgesHandler = require("./Handlers/badgesHandler");

app.get('/nuget/version/:packageId', function (req, res, next) {
	badgesHandler.displayNugetVersionBadge(res, req.params, next);
});

app.get('/nuget/downloads/:packageId', function (req, res, next) {
	badgesHandler.displayNugetDownloadsCountBadge(res, req.params, next);
});

app.get('/npm/version/:packageId', function (req, res, next) {
	badgesHandler.displayNpmVersionBadge(res, req.params, next);
});

app.get('/npm/downloads/:packageId', function (req, res, next) {
	badgesHandler.displayNpmDownloadsCountBadge(res, req.params, next);
});

app.get('/npm/downloads/:packageId/:startDate/:endDate', function (req, res, next) {
	badgesHandler.displayNpmDownloadsCountBadge(res, req.params, next);
});

app.get('/static/:leftLabel-:rightLabel-:color', function (req, res, next){
	badgesHandler.displayStaticBadge(res, req.params, next);
});

app.use(function(err, req, res, next){
	res.status(500);
	res.send(err.message);
});

function listen(port, callback){
	app.listen(port, callback);
}

exports.listen = listen;