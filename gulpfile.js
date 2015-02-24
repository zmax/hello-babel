"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var babel = require("gulp-babel");

gulp.task("default", ["es6", "combile"]);

gulp.task("es6", function() {
    return gulp.src(["src/**/*.es6.js", "src/**/*.es6.jsx"])
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

var combile_files = [
    // "node_modules/three/three.min.js",
    // "node_modules/react/react.js",
    "dist/**/*.es6.js"
];

gulp.task("combile", function() {
    return gulp.src(combile_files)
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dist"));
})
