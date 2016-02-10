var gulp = require('gulp');
var browserify = require('gulp-browserify');
var watchify = require('watchify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('copy', function() {
  gulp.src(['index.html', 'styles/*.*'])
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function() {
  gulp.src('./src/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', ['browserify'], function(){
  livereload.listen(35729);
});
