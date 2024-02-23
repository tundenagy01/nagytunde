// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer'); // Add necessary CSS prefixes
const cssnano = require('cssnano'); // Minify CSS for production

// Configure source and destination paths
const scssSrc = '/scss/*.scss'; // Input path for SCSS files
const cssDest = '/css'; // Output path for compiled CSS

// Task to compile SCSS to CSS with autoprefixing and minification
function compileSass() {
  return src(scssSrc)
    .pipe(sass().on('error', sass.logError)) // Handle compilation errors
    .pipe(postcss([autoprefixer()])) // Add browser prefixes
    .pipe(cssnano({ zindex: false })) // Minify CSS, excluding z-index (optional)
    .pipe(dest(cssDest));
}

// Task to watch for changes in SCSS files and recompile automatically
function watchSass() {
  watch(scssSrc, compileSass);
}

// Default task to run when you execute `gulp`
exports.default = watchSass;

// Task for production-ready build (minify without debugging info)
exports.build = compileSass;
