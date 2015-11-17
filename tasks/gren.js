/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

var Gren = require('github-release-notes/src/index.js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('gren', 'Grunt plugin for the npm github-release-notes', function() {
    var options = this.options({});
    var done = this.async();

    var gren = new Gren(options);

	gren.release().then(done);

  });

};