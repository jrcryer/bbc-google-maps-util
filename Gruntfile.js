module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      all: ['test/index.html']
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['jshint', 'qunit']);

};
