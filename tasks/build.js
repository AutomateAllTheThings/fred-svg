import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import concat from "gulp-concat";
import paths from "../paths.json";

gulp.task("build", () => {
	return gulp.src(paths.source.javascript)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("fredSvg.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.base));
});
