var gulp = require('gulp');
var sass = require('gulp-sass')
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

//npm install gulp --save
gulp.task('hello', done=>{
  console.log('Hello world!')
  done()
});
//npm install gulp-sass
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) //Convierte SASS a CSS CON GULP-SASS
    .pipe(gulp.dest('public/stylesheets'))
});
//npm install gulp-minify-css
gulp.task("style_min", () => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat("style_main.min.css"))
    .pipe(gulp.dest("public/stylesheets"));
});

gulp.task("watch", () => {
  gulp.watch("scss/**/*.scss", gulp.series("style_min"));
});