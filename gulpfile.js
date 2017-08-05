let config = require(".//webpack.config.test.js");
//let webpack = require('webpack');
let webpack = require("webpack");
let gulp = require('gulp');
let connect = require('gulp-connect');
let less = require('gulp-less');
// ===
let root = './testSrc';
let dist = './testDist';
let pathOp = {
    home: root + '/index.html',
    entry: root + '/app/app.js',
    js: root + '/app/**/*.js',
    dist: dist,
    copy: [root + '/app/**/**.html', root + '/app/asset/**/**'],
    images: [root + '/app/assest/**/*'],
    less: [root + '/**/**.less'],
    css: [root + '/**/**.css', root + '/**/**.scss'],
    static: {
        css: dist + '/assest/'
    }
};
// cnpm  install --save-dev bootstrap

gulp.task('copy', function() {
    return gulp.src(pathOp.copy, {
        base: root
    }).pipe(gulp.dest(pathOp.dist));
});

// 定义 less 任务
gulp.task('less', function() {
    // gulp.src(pathOp.less)
    //     .pipe(less())
    //     .pipe(gulp.dest(pathOp.static.css))
    //     .pipe(connect.reload());
});

gulp.task('watch', function() {
    // 当静态文件modify时，触发copy任务
    gulp.watch(pathOp.copy, ['copy']);
    // 当js文件modify时，触发webpack任务
    gulp.watch(pathOp.js, ['webpack']);
    //gulp.watch(pathOp.home, ['webpack']);
});

gulp.task('reload', function() {
    connect.reload();
});

gulp.task('webserver', function() {
    connect.server({
        root: dist,
        livereload: true
    });
});

gulp.task('webpack', function(done) {
    webpack(config, function(err, stats) {
        //console.log(err, stats);
        done(); //异步任务的关键之处，如果没有这行，任务会一直阻塞
    });
});


gulp.task('dev', ['webpack', 'copy', 'less', 'webserver', 'watch'], function(done) {
    console.log('Develop .......');
});

gulp.task('default', ['dev']);
