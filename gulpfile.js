var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/master.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('assets/css'))
});

gulp.tas

gulp.task('watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
})

gulp.task('default', ['sass','watch']);
