const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const gulpConf = require('../conf/gulp.conf');


gulp.task('nodemon', function () {
    nodemon({
        'script': 'server.js',
    })
});