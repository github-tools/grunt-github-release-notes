/*
 * grunt-github-release-notes
 * https://github.com/alexcanessa/grunt-github-release-notes
 *
 * Copyright (c) 2015 Alex Canessa
 * Licensed under the MIT license.
 */

'use strict';

var GithubReleaseNotes = require('github-release-notes/src/gren.js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('gren', 'Grunt plugin for the npm github-release-notes', function() {
    var options = this.options({});
    var done = this.async();
    var gren = new GithubReleaseNotes(options);

    if (this.target !== 'release' && this.target !== 'changelog') {
        throw new Error('The target needs to be either release or changelog');
    }

    var component = this;

	gren.init()
		.then(function (success) {
			if(success) {
			    return gren[component.target]();
			}
		}).then(done);
  });

};
