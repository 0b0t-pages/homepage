const { watch, src, dest, series, parallel } = require("gulp");

/* Utils */
// const browserSync = require("browser-sync").create();
const notify = require("gulp-notify");

/* Sass & Opti css */
const sass = require("gulp-sass")(require('sass'));
const rename = require("gulp-rename");
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");

const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const minify = require('gulp-minify');

const config = {
  paths: {
    input: {
      scss: ["scss/styles.scss"],
      scsswatch: ['scss/*.scss', 'scss/*/*.scss', 'slick/*.scss'],
      jswatch: ['js/*.js']
    },
    output: {
      css: "css/"
    },
  },
  filename: {
    output: {
      css: "styles.css",
      min: "styles.min.css",
    },
  },
  sassOptions: {
    errLogToConsole: true,
    outputStyle: "expanded",
  },
  autoprefixerOptions: {
    overrideBrowserslist: ["last 2 version", "> 1%", "ie 11"],
  },
};

function doCss() {
  return src(config.paths.input.scss, { sourcemaps: true })
    .pipe(sassGlob())
    .pipe(sass(config.sassOptions))
    .on("error", notify.onError())
    //.pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(rename(config.filename.output.css))
    .pipe(dest(config.paths.output.css, { sourcemaps: "." }))
    .pipe(dest("css/"))
    // .pipe(browserSync.stream());
}

function minifycss() {
  return src('css/styles.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename(config.filename.output.min))
    .pipe(dest('css'));
};

function minifyjs() {
  return src(['js/*.js'])
    .pipe(minify({noSource: true}))
    .pipe(dest('js/min'))
};

/* Init des différents Watcher */
function serve() {
  // browserSync.init();
  watch(config.paths.input.scsswatch, series(doCss, minifycss));
  watch(config.paths.input.jswatch, series(minifyjs));
}

module.exports = {
  default: series(doCss, minifycss, minifyjs, serve),
};
