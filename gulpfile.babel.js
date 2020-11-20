// HTML
import htmlmin from 'gulp-htmlmin'

//CSS
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

// Javascript
import gulp from 'gulp'
import babel from 'gulp-babel'

import terser from 'gulp-terser'

//Common
import concat from 'gulp-concat'

//SASS
import sass from 'gulp-sass'
import clean from 'gulp-purgecss'
import cacheBust from 'gulp-cache-bust'


//Browsersync
import { init as server, stream, reload } from 'browser-sync'


//Variables/constantes
const cssPlugins = [
    cssnano(),
    autoprefixer()
]

const wptheme = './wp/wp-content/themes/ombu2020'

gulp.task('html-min', () => {
    return gulp  
        .src('./src/*.html')
        .pipe(htmlmin({
        html5: true
        }))
        .pipe(cacheBust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest(wptheme))
  
})

gulp.task('styles', () => {
    return gulp  
        .src('./src/css/*.css')
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest(wptheme + '/css'))
        .pipe(stream())
})

gulp.task('sass', () => {
    return gulp  
        .src('./src/scss/styles.scss')
        .pipe(sass( {
        outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(wptheme + '/css'))
        .pipe(stream())
})

gulp.task('clean', () => {
    return gulp  
        .src(wptheme + '/css/styles.css')
        .pipe(clean( {
            content: [wptheme + '/*.html']
        }))
        .pipe(gulp.dest(wptheme + '/css'))
  
})

gulp.task('babel', () => {
  return gulp  
        .src('./src/js/main.js')
        .pipe(babel())  
        .pipe(terser())
        .pipe(gulp.dest(wptheme + '/js'))

})

gulp.task('default', () => {
    server({
        server: wptheme 
    })
    gulp.watch('./src/*.html', gulp.series('html-min')).on('change', reload)
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass')).on('change', reload)
    gulp.watch('./src/css/*.css', gulp.series('styles'))
    gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', reload)
    gulp.watch('./src/css/*.css', gulp.series('clean'))
})