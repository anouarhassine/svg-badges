var helper = require('./requestHelper');
var parseString = require('xml2js').parseString;
var processors = require('xml2js/lib/processors');

function getNugetPackageLatestVersion(packageId)
{
	return new Promise((resolve, reject) => {
		try {
			var host = 'api.nuget.org';
			var path = '/v3-flatcontainer/' + packageId + '/index.json';
            var requestUrl = 'https://' + host + path;

			helper.getContentViaHttp(
                requestUrl, 
                function (content) {
                    if (helper.isJson(content)) {
                        var versionsInfo = JSON.parse(content);
                        var versions = versionsInfo.versions;
                        var latestVersion = versions[versions.length - 1];
                        resolve(latestVersion);
                    }
                    else {
                        reject();
                    }},
                    function (error) {
                        reject(error);
                    });
		} 
		catch (error) {
			reject(error.message);
		}
	});
}

function getNugetPackageDownloadsCount(packageId, version) {
	return new Promise((resolve, reject) => {
		try {
                var host = 'www.nuget.org';
                var path = '/api/v2/Packages(Id=' + packageId + ',Version=' + version + ')';
                var requestUrl = 'https://' + host + path;
                
                helper.getContentViaHttp(
                    requestUrl, 
                    function (packageInfo) {
                        parseString(
                            packageInfo, 
                            {
                                tagNameProcessors : [processors.stripPrefix],
                                explicitArray : false
                            },
                            function (err, result) {
                                resolve(result.entry.properties.DownloadCount._);
                        },
                        function (error) {
                        reject(error);
                    });
			});
		}
		catch (error) {
			reject(error.message);
		}
	});
}

exports.getNugetPackageLatestVersion = getNugetPackageLatestVersion;
exports.getNugetPackageDownloadsCount = getNugetPackageDownloadsCount;