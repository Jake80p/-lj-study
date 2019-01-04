const gulp = require('gulp');
const babel = require('gulp-babel');

function handleError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('babel', function() {

  // gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
  //  .pipe(eslint())
  //  .pipe(eslint.format());

   gulp.src('es6/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'));

  return gulp.src("public/es6/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("public/dist"));
  
});
