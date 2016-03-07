var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

gulp.task('default', ['compile']);
gulp.task('compile', ['sass', 'coffee']);

gulp.task('sass', function() {
	gulp.src('public/style/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/style'));
});

gulp.task('coffee', function() {
	gulp.src('public/js/lastfm.coffee')
		.pipe(coffee(({bare:true})))
		.pipe(gulp.dest('public/js'));
});
