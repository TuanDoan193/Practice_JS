const gulp = require('gulp');
const babel = require('gulp-babel');

//Node source
gulp.task('default',function(done){
    //Gulp tasks go here
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))

    //browser source
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"))
    done()
});