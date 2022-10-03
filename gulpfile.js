const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
function css () {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}
exports.default = function () {
    watch('src/*.scss', css);			//Watch for changes in the directory
};