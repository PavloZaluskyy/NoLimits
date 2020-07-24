const {
	src,
	dest,
	parallel,
	series,
	watch
} = require("gulp");

const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

function clear(){
    return src('./build/*', {read: false})
        .pipe(clean());
};
function javaScript(){
	const source = './src/script/**/*.js';
	return src(source)
		.pipe(changed(source))
		.pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(minify())
		.pipe(dest('./build/script/'))
		.pipe(browserSync.stream());
}
function css(){
   const source = './src/style/*.css';
    return src(source)
        .pipe(changed(source))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(dest('./build/style/'))
        .pipe(browserSync.stream());
};
function data(){ 
  return src('./src/data/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/data'))
};
function fonts(){ 
  return src('./src/fonts/**/*')
        .pipe(dest('./build/fonts'))
};
function img(){ 
  return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'))
};
function html(){
    return src('./src/*.html')
    	.pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('./build/'))
      .pipe(browserSync.stream());
};
function watchFiles(){
	watch('./src/style/*', css);
	watch('./src/*.html', html);
	watch('./src/img/*', img);
	watch('./src/data/**/*', data);
	watch('./src/fonts/**/*', fonts);
	watch('./src/script/**/*', javaScript);
}
function browserSyncMethod(){
	browserSync.init({
        server: {
            baseDir: './build/'
        },
        port: 3000
    });
};
exports.watch = parallel(watchFiles, browserSyncMethod);
exports.default = series(clear, parallel(html, css, javaScript, data, img, fonts));