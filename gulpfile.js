'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    urlAdjuster = require('gulp-css-url-adjuster'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    change = require('gulp-change'),
    minify = require('gulp-minify');

// Task to run default
// To run task enter: gulp default
// Outputs local development stylesheet
gulp.task('sass:default', () => {
  return gulp.src(['./src/styles/scss/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browserslist: [
        '> 5%',
        'last 2 versions',
        'not dead',
        'Edge',
        'ff',
        'and_ff',
        'Safari',
        'Chrome',
        'iOS',
        ],
        cascade: true
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(urlAdjuster({
      prepend: '..'
    }))
    .pipe(concat("gd-theme--default.css"))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssmin())
		.pipe(concat('gd-theme--default.min.css'))
    .pipe(gulp.dest('./src/styles/css'));
});

// Task to run default
// To run task enter the following command in Terminal: gulp default
gulp.task('default', () => {
  gulp.watch(['./src/styles/scss/*.scss', './src/styles/scss/**/*.scss', './src/styles/scss/**/*/*.scss'], gulp.series(['sass:default']));
});