var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('build', function(){
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(uglify())
        .pipe(gulp.dest('.'))
});

gulp.task('style', function(){
    return gulp.src('style/style.css')
        .pipe(minify())
        .pipe(gulp.dest('./build/style'))
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['webpack']);
});

gulp.task('default', ['watch']);