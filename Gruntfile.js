/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    gren: {
      release: {
        options: {
          token: {github_token}',
          username: {github_username},
          repo: {github_repo_name}
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // plugin's task(s), then test the result.
  grunt.registerTask('release', ['gren']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['gren']);

};
