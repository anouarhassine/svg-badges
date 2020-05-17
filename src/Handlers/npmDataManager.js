var helper = require('./requestHelper');

function getNpmPackageLatestVersion(packageId)
{
	return new Promise((resolve, reject) => {
		try {
                var host = 'registry.npmjs.org';
                var path = '/' + packageId + '/latest';
                var requestUrl = 'https://' + host + path;
                
                helper.getContentViaHttp(
                    requestUrl, 
                    function (content) {
                        if (helper.isJson(content)) {
                            var packageInfo = JSON.parse(content);
                            if (!packageInfo.hasOwnProperty('error')) {
                                var latestVersion = packageInfo['version'];
                                resolve(latestVersion);
                            }
                            else {
                                reject();
                            }
                        }
                        else {
                            reject();
                        }
                    },
                    function (error) {
                        reject(error);
                    });
		} 
		catch (error) {
			reject(error.message);
		}
	});
}

function getNpmPackageDownloadsCount(packageId, startDate, endDate) {
	return new Promise((resolve, reject) => {
		try {
                var host = 'api.npmjs.org';
                var path = '/downloads/point/' + startDate + ':' + endDate + '/' + packageId;
                var requestUrl = 'https://' + host + path;

                helper.getContentViaHttp(
                    requestUrl, 
                    function (result) {
                        if (helper.isJson(result))
                        {
                            var downloadsInfo = JSON.parse(result);
                            if (!downloadsInfo.hasOwnProperty('error'))
                            {
                                var downloadsCount = parseInt(downloadsInfo['downloads']);
                                resolve(downloadsCount);
                            }
                            else {
                                reject();
                            }
                        }
                        else {
                            reject();
                        }
                    },
                    function (error) {
                        reject(error);
                    });
		} 
		catch (error) {
			reject(error.message);
		}
	});
}

exports.getNpmPackageLatestVersion = getNpmPackageLatestVersion;
exports.getNpmPackageDownloadsCount = getNpmPackageDownloadsCount;