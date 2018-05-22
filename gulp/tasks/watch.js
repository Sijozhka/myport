'use strict';

module.exports = function(){
	$.gulp.task('watch', function(){
		$.gulp.watch('./src/precss/*.less', $.gulp.series('less'));
		$.gulp.watch('./src/index.html',$.gulp.series('html'));
	});
};	
		