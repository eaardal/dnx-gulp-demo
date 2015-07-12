var gulp = require('gulp');
var dnx = require("gulp-dnx");
var watch = require('gulp-watch');

var TASK_RUN = 'run';
var TASK_BUILD = 'build';

function dnxRestoreBuildRun(){
    var options = {
        restore: true,
        build: true,
        run: true,
        cwd: './src/AtomDemo/'
    };
    var dnxCommand = 'run';
    return dnx(dnxCommand, options);
}

function dnxBuild(){
    var options = {
        restore: false,
        build: true,
        run: false,
        cwd: './src/AtomDemo/'
    };
    var dnxCommand = 'build';
    return dnx(dnxCommand, options);
}

gulp.task('default', dnxRestoreBuildRun());

gulp.task('run', dnxRestoreBuildRun());

gulp.task('build', dnxBuild());

gulp.task('watch-build', function(){
    gulp.start(TASK_BUILD);
    watch('src/**/*.cs', function(){
        gulp.start(TASK_BUILD);
    });
});

gulp.task('watch-run', function(){
    gulp.start('run');
    watch('src/**/*.cs', function(){
        gulp.start('run');
    });
});
