const { src, dest, series, parallel } = require('gulp');
const spawn = require('child_process').spawn;
const maps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const css = require('gulp-css');
const electron = require('electron'); // Use Electron's provided path

/* Build Tasks */
function buildCss() {
  return src('src/**/*.css')
    .pipe(css())
    .pipe(dest('app/'));
}

function buildJs() {
  return src(['main.js', 'src/**/*.js', '!src/**/*.test.js'])
    .pipe(maps.init())
    .pipe(babel())
    .pipe(maps.write('.'))
    .pipe(dest('app/'));
}

const build = parallel(buildCss, buildJs);

/* Copy Tasks */
function copyHtml() {
  return src('src/*.html').pipe(dest('app/'));
}

function copyAssets() {
  return src('src/assets/**/*').pipe(dest('app/assets'));
}

const copy = parallel(copyHtml, copyAssets);

/* Helper to Execute a Command */
function execute(command, args = ['.']) {
  return new Promise((resolve, reject) => {
    spawn(command, args, { stdio: 'inherit' })
      .on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(`Command failed with exit code ${code}`);
        }
      });
  });
}

/* Execute Tasks */
function startTask() {
  // Use Electron's provided binary path
  return execute(electron);
}

function releaseTask() {
  const builderCmd = 'node_modules/.bin/electron-builder';
  return execute(builderCmd);
}

function testTask() {
  const jestCmd = 'node_modules/.bin/jest';
  return execute(jestCmd);
}

/* Exported Tasks */
exports.build = build;
exports.copy = copy;
exports.start = series(copy, build, startTask);
exports.release = series(copy, build, releaseTask);
exports.test = series(copy, build, testTask);
exports.default = exports.start;
