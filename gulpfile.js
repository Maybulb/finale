var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['compile']);

gulp.task('compile', ['sass']); // allow to add more tasks for more compilation

gulp.task('sass', function() {
	gulp.src('public/style/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/style'));
});

