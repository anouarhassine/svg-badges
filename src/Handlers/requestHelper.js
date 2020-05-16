var request = require('request');

function getContentViaHttp(requestUrl, callback, errorCallback) {
	request(requestUrl, function (error, response, body) {
		if (error) {
			console.log("Error occured during a http request: " + error);
			errorCallback(error);
		}
		else {
			callback(body);
		}
	});
}

function getTodaysDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd < 10) {
		dd='0'+dd;
	} 

	if(mm < 10) {
		mm='0'+mm;
	} 

	var today = yyyy + '-' + mm + '-' + dd;
	return today;
}

function isJson(str) {
	try {
		JSON.parse(str);
	} 
	catch (e) {
		return false;
	}

	return true;
}

exports.getContentViaHttp = getContentViaHttp;
exports.getTodaysDate = getTodaysDate;
exports.isJson = isJson;