const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');


gulp.task('babel', function() {

  //eslint 실행
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
   .pipe(eslint())
   .pipe(eslint.format());

   //노드 소스
   gulp.src('es6/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'));

  //브라우저 소스
  return gulp.src("public/es6/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("public/dist"));
  
});
