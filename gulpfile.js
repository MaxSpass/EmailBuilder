var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // inky = require('inky'),
    inlineCss = require('gulp-inline-css'),
    htmlmin = require('gulp-htmlmin'),
    rename      = require('gulp-rename'),
    removeHtmlComments = require('gulp-remove-html-comments');

// SASS
gulp.task('sass', function () {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

// Copy and Minify
gulp.task('copy-minify', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(removeHtmlComments())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// GULP WATCH
gulp.task('default',['sass','copy-minify'], function() {
    gulp.watch('./scss/**/*.scss',['sass']);
    gulp.watch('./templates/*.html',['copy-minify']);
});

// BUILD
gulp.task('build',['sass','copy-minify'], function() {
    return gulp.src('./dist/*.html')
    .pipe(inlineCss())
    .pipe(rename({suffix: '.release'}))
    .pipe(gulp.dest('./dist'));
});


// //INLINE CSS

// gulp.task('inline', function () {
//   return gulp.src('./dist/*.html')
//         .pipe(inlineCss())
//         .pipe(gulp.dest('./dist/inlined'));
// });

//STYLES

// gulp.task('styles', function () {
//   return gulp.src('./scss/styles.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./dist'));
// });

// //CONVERTE INKY
// gulp.task('inky', function() {
//   return gulp.src('./templates/**/*.html')
//     .pipe(inky())
//     .pipe(gulp.dest('./dist'));
// });

// //INLINE CSS
// gulp.task('inline', function () {
//   return gulp.src('./dist/*.html')
//         .pipe(inlineCss())
//         // .pipe(gulp.dest('./dist/inlined'));
// });

//Remove HTML-Comments
// gulp.task('rmcomment', function () {
//   return gulp.src('./dist/*.html')
//     .pipe(removeHtmlComments())
//     .pipe(gulp.dest('./dist/ForSendMinify'));
// });

//HTML-MIN
// gulp.task('minify', function() {
//   return gulp.src('./dist/*.html')
//     .pipe(removeHtmlComments())
//     .pipe(inlineCss())
//     .pipe(htmlmin({collapseWhitespace: true}))


//     // .pipe(gulp.dest('./dist/ForSendMinify'));

// });

//WATCH

// gulp.task('default',['minify', 'inky', 'styles'],function() {
//     gulp.watch('./scss/**/*.scss',['styles']);
//     gulp.watch('./templates/*.html',['inky']);
// });

// gulp.task('default',['minify', 'inky', 'styles'],function() {
//     gulp.watch('./scss/**/*.scss',['styles']);
//     gulp.watch('./templates/*.html',['inky']);
// });