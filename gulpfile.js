var gulp = require("gulp"),
    jade = require("gulp-jade"),
    nodemon = require("gulp-nodemon");

gulp.task("jade", function() {
  return gulp.src(["publi/*.jade", "public/**/*.jade"])
    .pipe(jade())
    .pipe(gulp.dest("public"));
});

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', stdout: true })
    .on('change')
    .on('restart', function () {
      console.log('>> node restart');
    });
});

gulp.task('watch', function() {
  gulp.watch(['public/*.jade', 'public/**/*.jade'], ['jade']);
});

gulp.task('default', ['jade', 'nodemon', 'watch']);