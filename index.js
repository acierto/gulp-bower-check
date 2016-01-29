/*
 * gulp-bower-check
 * https://github.com/acierto/gulp-bower-check
 *
 * Copyright (c) 2016 Bogdan Nechyporenko
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;
var gutil = require('gulp-util');
var splitLines = require('split-lines');
var _ = require('lodash');

module.exports = function (gulp) {

    gulp.task('verify-repositories', function (cb) {

        var cwd = process.cwd();
        var bowerJson = require(cwd + '/bower.json');

        if (_.isEmpty(bowerJson.dependencies)) {
            cb();
        }

        _.forEach(bowerJson.dependencies, function (dependency) {
            if (_.startsWith(dependency, 'git@')) {
                var hashSymbol = '#';
                var hashInd = dependency.indexOf(hashSymbol);
                var repository = dependency.substring(0, hashInd);
                var tagVersion = dependency.substring(hashInd + hashSymbol.length);

                exec('git ls-remote ' + repository, function (err, stdout, stderr) {
                    if (err || stderr) {
                        gutil.log(err || stderr);
                    }

                    var found = _.reduce(splitLines(stdout), function (result, line, index) {
                        return result || _.endsWith(line, 'refs/tags/' + tagVersion);
                    }, false);

                    if (!found) {
                        gutil.log('Tag ' + tagVersion + ' hasn\'t been found for repository ' + repository);
                    }
                    cb();
                });
            }
        });
    });

    gulp.task('default', ['verify-repositories']);
};