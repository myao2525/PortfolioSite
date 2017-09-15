var gulp = require('gulp');
var browserSync =require('browser-sync');
var sass = require('gulp-sass');

gulp.task('default', ['browser-sync','watch']);


gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        },
        port: 8080,
        https: true
    });
});

// 'sass'というタスク。コンパイルし、cssを作成。
gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
});
 
// ファイルの変更を監視するタスク。
gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
});