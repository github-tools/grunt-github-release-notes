/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

var GithubReleaseNotes = require('github-release-notes/src/gren.js');
var utils = require('github-release-notes/src/utils');
var chalk = require('chalk');

module.exports = function(grunt) {
    grunt.registerMultiTask('gren', 'Grunt plugin for the npm github-release-notes', function() {
        var options = this.options({});
        options.force = grunt.cli.options.force;

        var done = this.async();
        var gren = new GithubReleaseNotes(options);

        if (this.target !== 'release' && this.target !== 'changelog') {
            throw new Error('The target needs to be either release or changelog');
        }

        var component = this;

        gren.init()
            .then(function() {
                return gren[component.target]();
            })
            .then(done)
            .catch(function(error) {
                utils.clearTasks(gren);

                console.error(error);

                if (options.force) {
                    console.log(chalk.bgYellow(chalk.black('\nSkipping because --force enabled')));

                    done();
                }
            });
    });
};
