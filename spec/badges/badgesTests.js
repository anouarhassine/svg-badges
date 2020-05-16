var nugetDataManager = require("../../src/Handlers/nugetDataManager");
var npmDataManager = require("../../src/Handlers/npmDataManager");
var nock = require('nock');
var mocks = require("./mocks");
var requestHelper = require("../../src/Handlers/requestHelper");

describe("A spec to test Nuget-related badges", function() {

  it("Checks that Nuget package latest version is retrieved", function(done) {
      var nugetVersionsInfo = nock("http://api.nuget.org")
        .get("/v3-flatcontainer/reactivexcomponent.net/index.json")
        .reply(200, mocks.NugetVersionsInfo);
        
      nugetDataManager.getNugetPackageLatestVersion("reactivexcomponent.net").then(latestVersion => {
        expect(latestVersion).not.toBeNull();
        done();
      });
  }, 5000);

  it("Checks that Nuget package downloads count is retrieved", function(done) {
      var nugetDowloadsCountInfo = nock("http://www.nuget.org")
        .get("/api/v2/Packages(Id=reactivexcomponent.net,Version=0.1.0-rcv018)")
        .reply(200, mocks.NugetDownloadsInfo);
        
      nugetDataManager.getNugetPackageDownloadsCount("reactivexcomponent.net", "0.1.0-rcv018").then(downloadsCount => {
        expect(downloadsCount).not.toBeNull();
        done();
      });
  }, 5000);
});

describe("A spec to test Npm-related badges", function(){
  it("Checks that Npm package latest version is retrieved", function(done) {
      var npmVersionsInfo = nock("http://registry.npmjs.org")
        .get("/reactivexcomponent.js/latest")
        .reply(200, mocks.NpmVersionInfo);
        
      npmDataManager.getNpmPackageLatestVersion("reactivexcomponent.js").then(latestVersion => {
        expect(latestVersion).not.toBeNull();
        done();
      });
  }, 5000);

  it("Checks that Npm package downloads count is retrieved", function(done) {
      var npmDownloadsCountInfo = nock("http://api.npmjs.org")
        .get("/downloads/point/2016-01-01:" + requestHelper.getTodaysDate() + "/reactivexcomponent.js")
        .reply(200, mocks.NpmDownloadsInfo);
        
      npmDataManager.getNpmPackageDownloadsCount("reactivexcomponent.js", '2016-01-01', requestHelper.getTodaysDate()).then(downloadsCount => {
        expect(downloadsCount).toBeGreaterThan(0);
        done();
      });
  }, 5000);
});