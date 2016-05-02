var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

var paths = [
	'public/style/*.sass',
	'public/js/*.coffee'
]

gulp.task('default', ['compile']);
gulp.task('compile', ['sass', 'coffee']);

gulp.task('watch', function(){
	gulp.watch(paths, ['sass', 'coffee'])
});

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
