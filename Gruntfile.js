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
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    gren: {
      release: {
        options: {
          token: '9d928d384738b0b15604aa440b44587fb65ab042',
          username: 'digital-detox',
          repo: 'rbs-xdl'
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('release', ['gren']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'gren']);

};