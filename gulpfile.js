const gulp   = require('gulp');
const gulpif = require('gulp-if');
const babel  = require('gulp-babel');
const rollup = require('gulp-rollup-2');
const source = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const clean  = require('del');

const bundle = async function (dep, min) {
    
    min = min ? '-min' : '';
    
    return (await rollup.src({
           input: 'main.js',
        external: ['Bro'],
          output: {
                 name: '',
               format: 'iife',
                 file: `${dep.toLowerCase()}-easing${min}.js`,
              interop: false,
            sourcemap: true,
              globals: {
                  Bro: `window.${dep}`
            }
        }
    }))
    .pipe(babel({ retainLines: true, presets: [['@babel/preset-env', { modules: false, loose: true }]] }))
    .pipe(gulpif(!!min, terser()))
    .pipe(source.write('.'))
    .pipe(gulp.dest('dist'));
};

gulp.task('build:dev', async () => bundle('Bro'));
gulp.task('build:pro', async () => bundle('Bro', true));
gulp.task('build',     gulp.series('build:dev', 'build:pro'));
gulp.task('clean',     async () => clean('dist/*'));
