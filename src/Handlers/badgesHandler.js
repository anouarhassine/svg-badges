var badgeGenerator = require('./packageBadgeGenerator');
var color = require('./colors');
var nugetDataManager = require('./nugetDataManager');
var npmDataManager = require('./npmDataManager');
var helper = require('./requestHelper');

function displayNugetVersionBadge(response, params, next){
    nugetDataManager.getNugetPackageLatestVersion(params['packageId']).then(latestVersion => {
		badgeGenerator.generateBadge('nuget', latestVersion, color.Blue).then(svgContent => {
		response.writeHead(200, {"Content-Type": "image/svg+xml"})
		response.write(svgContent);
		response.end();
		});
	}).catch(reason => {
		var error = new Error('Could not handle request');
		next(error);
	});
}

function displayNugetDownloadsCountBadge(response, params, next){
	nugetDataManager.getNugetPackageLatestVersion(params['packageId']).then(latestVersion => {
		nugetDataManager.getNugetPackageDownloadsCount(params['packageId'], latestVersion).then(downloadsCount => {
		badgeGenerator.generateBadge('downloads', downloadsCount, color.BrightGreen).then(svgContent => {
			response.writeHead(200, {"Content-Type": "image/svg+xml"})
			response.write(svgContent);
			response.end();
			});
		});
	}).catch(reason => {
		var error = new Error('Could not handle request');
		next(error);
	});
}

function displayNpmVersionBadge(response, params, next){
	npmDataManager.getNpmPackageLatestVersion(params['packageId']).then(latestVersion => {
		badgeGenerator.generateBadge('npm', latestVersion, color.Blue).then(svgContent => {
		response.writeHead(200, {"Content-Type": "image/svg+xml"})
		response.write(svgContent);
		response.end();
		});
	}).catch(reason => {
		var error = new Error('Could not handle request');
		next(error);
	});
}

function displayNpmDownloadsCountBadge(response, params, next){
	var startDate = '2009-05-27';
	var endDate = helper.getTodaysDate();

	if (typeof params['startDate'] !== 'undefined' && typeof params['endDate'] !== 'undefined'){
		startDate = params['startDate'];
		endDate = params['endDate'];
	}
	
	npmDataManager.getNpmPackageDownloadsCount(params['packageId'], startDate, endDate).then(downloadsCount => {
			badgeGenerator.generateBadge('downloads', downloadsCount.toString(), color.BrightGreen).then(svgContent => {
			response.writeHead(200, {"Content-Type": "image/svg+xml"})
			response.write(svgContent);
			response.end();
			});
		}).catch(reason => {
			var error = new Error('Could not handle request');
			console.log(reason);
			next(error);
		});
	
}

function displayStaticBadge(response, params, next){
    var badgeColor = color.LightGrey;
    if (color[params['color']]){
        badgeColor = color[params['color']];
    }

    badgeGenerator.generateBadge(params['leftLabel'], params['rightLabel'], badgeColor).then(svgContent => {
		response.writeHead(200, {"Content-Type": "image/svg+xml"})
		response.write(svgContent);
		response.end();
		}).catch(reason => {
            var error = new Error('Could not handle request');
		    next(error);
        });
}

exports.displayNugetVersionBadge = displayNugetVersionBadge;
exports.displayNugetDownloadsCountBadge = displayNugetDownloadsCountBadge;
exports.displayNpmVersionBadge = displayNpmVersionBadge;
exports.displayNpmDownloadsCountBadge = displayNpmDownloadsCountBadge;
exports.displayStaticBadge = displayStaticBadge;