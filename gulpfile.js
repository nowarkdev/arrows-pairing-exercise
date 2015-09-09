var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    exec = require('child_process').exec,
    testServer, mockServer;

function _setGemPaths() {
    var gemPath = process.env.HOME + '/.rvm/gems/ruby-2.2.1@features-gemset',
        binariesPath = gemPath + '/bin';

    process.env.PATH = binariesPath + ':' + process.env.PATH;
    process.env.GEM_PATH = gemPath;
}

function _runFeature(options) {
    var feature, cmd,
        runAllFeaturesCmd = 'cd test && cucumber -c features',
        runSingleFeatureCmd = runAllFeaturesCmd + '/' + options.testFile + '.feature';

    cmd = options.testFile ? runSingleFeatureCmd : runAllFeaturesCmd;

    _setGemPaths();

    feature = exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        options.callback(err);
    });

    feature.on('close', function() {
        testServer.kill('SIGINT');
        mockServer.kill('SIGINT');
        console.log('Shutting down testServer and mockServer.');
    });
}

gulp.task('runTestServers', function(){
    testServer = spawn('node', ['test/testServer.js']);
    console.log('Running testServer with process id:', testServer.pid);

    testServer.on('error', function (data) {
        console.log('TestServer::Error::', data);
    });

    mockServer = spawn('node_modules/simulado/bin/simulado');
    console.log('Running mockServer with process id:', mockServer.pid);

    mockServer.on('error', function (error) {
        console.log('MockServer::Error::', error);
    });
});

gulp.task('runAllFeatures', function(callback) {
    _runFeature({callback: callback});
});

gulp.task('runFeature', ['runTestServers'], function(callback) {
    var options = process.argv.slice(3),
        testFile = options[1];

    _runFeature({testFile: testFile, callback: callback});
});

gulp.task('default', ['runTestServers', 'runAllFeatures']);