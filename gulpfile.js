"use strict";

var gulp = require("gulp");
var browserify = require('browserify');

// var concat = require("gulp-concat");
// 用 vinyl-source-stream 取代 concat
var source = require('vinyl-source-stream');

// 不再需要, browserify 會自己產生 source maps
// var sourcemaps = require("gulp-sourcemaps");

// var babel = require("gulp-babel");
// 用 babelify 取代 babel
var babelify = require('babelify');

gulp.task("default", ["browserify", "watch"]);

gulp.task("browserify", function() {
    return browserify({
        entries: './src/app.js',
        // import 時可乎略副檔名, 預設為 js
        extensions: ['.js', '.jsx'],
        // source maps
        debug: true
    })
    // .transform('babelify', { presets: ['es2015', 'react'/*, 'stage-0', 'stage-1'*/]})
    // 因為 .babelrc 所以不用帶參數
    .transform('babelify')
    .bundle()
    .on('error', function(err) {
        console.error(err.message);
        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task("watch", function() {
    gulp.watch('src/**/*.js', ['browserify']);
})
