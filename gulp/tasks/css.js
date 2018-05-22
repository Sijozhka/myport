'use strict';

module.exports = function() {
	$.gulp.task('css', function() {
	return $.gulp.src('./src/less/*.css')
			.pipe($.gulp.dest('./build/assets/css'))
		

	});
}