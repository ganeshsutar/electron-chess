var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var webpackConfig = require('./webpack-config.js');
var webpack = require('webpack');
var path = require('path');

gulp.task('styles', function(){
  return gulp.src('src/renderer/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/renderer/css'));
});

gulp.task('html', function(){
  return gulp.src('src/renderer/html/**/*.html')
    .pipe(gulp.dest('dist/renderer/html'));
});

gulp.task('jsx', function(done){
  webpack(webpackConfig, function(err, stats) {
    if(err) console.log(err);
    gutil.log("[webpack]", stats.toString({}));
    done();
  });
});

gulp.task('electron', function(done){
  webpack({
    entry: './src/main/index.js',
    output: {
      filename: 'index.js',
      path: path.join(__dirname, 'dist', 'main')
    },
    target: 'electron-main',
    module: {
      loaders: [{
    		test: /\.jsx?$/,
    		exclude: /(node_modules|bower_components|public)/,
    		loader: 'babel',
    		query: {
    		  presets: ['es2015', 'react']
    		}
  	 }]
   },
   node : {
     __dirname: true
   }
  }, function(err, stats) {
    if(err) console.log(err);
    gutil.log("[webpack]", stats.toString({}));
    done();
  });
});

gulp.task('copy-imgs', function(){
  return gulp.src('./src/renderer/imgs/**/*')
    .pipe(gulp.dest('./dist/renderer/imgs'));
});

gulp.task('default',['styles','html','jsx','electron','copy-imgs']);
