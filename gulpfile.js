const gulp = require("gulp");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");
gulp.task("devSass", () => {
    return gulp.src("./web/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./web/css"))
})
gulp.task("server", () => {
    return gulp.src("./web")
        .pipe(webserver({
            port: 8888,
            open: true,
            livereload: true,
            proxies: [
                { source: "/api/addMoney", target: "http://localhost:3000/api/addMoney" },
                { source: "/api/delMoney", target: "http://localhost:3000/api/delMoney" },
                { source: "/api/delData", target: "http://localhost:3000/api/delData" },

            ]
        }))
})
gulp.task("watching", () => {
    return gulp.watch("./web/scss/**/*.scss", gulp.series("devSass"))
})
gulp.task("default", gulp.series("devSass", "server", "watching"))