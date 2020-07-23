var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('hello', done=>{
  console.log('Hello world!')
  done()
});

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) //Convierte SASS a CSS CON GULP-SASS
    .pipe(gulp.dest('public/stylesheets'))
});