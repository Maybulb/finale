var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
	gulp.src('public/style/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/style'));
});

