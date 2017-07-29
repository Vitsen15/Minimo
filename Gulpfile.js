'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    //bourbon = require('node-bourbon'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    wait = require('gulp-wait'),
    // wait = require('gulp-wait'),
    uglify = require('gulp-uglifyjs'),
    browserSync = require('browser-sync').create(),
	babel = require("gulp-babel");


// Scss stylesheets
gulp.task('stylesheets', function() {
    return gulp.src('stylesheets/**/*.scss')
        // .pipe(wait(150))
        .pipe(wait(150))
        .pipe(sass({
            outputStyle: 'compressed',
            //includePaths: bourbon.includePaths
        })).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ["last 15 version", "> 1%" , "ie 8"]
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    watch(['stylesheets/**/*.scss'], function(event, cb) {
        gulp.start('stylesheets');
    });
    watch(['./js/main.js'], function(event, cb) {
        gulp.start('uglify');
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./",
        open: true,
        port: 8081
    });

});

gulp.task('uglify', function() {
    gulp.src('./js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./js/min'))
});

// Run
gulp.task('default', [
    'stylesheets',
    'serve',
    'uglify',
    'watch'
]);

gulp.task('wp', [
    'stylesheets',
    'watch'
]);