/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

var gren_options = {
    ignoreIssuesWith: [
        "duplicate",
        "wontfix",
        "invalid",
        "help wanted"
    ],
    template: {
        issue: ({ text, name, url, labels }) => {
            labels = labels.slice(0, -1);

            return `- [${text}](${url}) ${name} - ${labels}`;
        },
        label: "_{{label}}_,"
    }
}

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        gren: {
            release: {},
            changelog: {}
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // plugin's task(s), then test the result.
    grunt.registerTask('release', ['gren']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['gren']);

};
