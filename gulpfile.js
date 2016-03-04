var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(rename("re-percentage.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('build/'));    
});

