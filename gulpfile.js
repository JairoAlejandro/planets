const {src, dest,watch} = require('gulp'),
sass = require('gulp-sass')(require('sass')),
esBuild = require('gulp-esbuild'),
bs = require('browser-sync').create(),
reload = bs.reload,
svgr = require('esbuild-plugin-svgr'),
autoprefixer = require('gulp-autoprefixer')

const compileSass = () =>{
    return src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(autoprefixer())
        .pipe(dest('./public'))
} 

const bundle = () => {
    return src('./src/app.jsx')
         .pipe(esBuild({
            entryNames:'app',
            loader: {'.js':'jsx'},
            jsx: 'automatic',
            minify: true,
            bundle: true,
            outfile: 'app.js',
            plugins:[svgr()]
        })) 
        .pipe(dest('./public'))
}

const server = () =>{
    bs.init({
        notify: false,
        server: './public',
        watch: true,
        single: true,
        files:[
            './public/**/*.{html,css,js,png,svg,jpg,ttf}'
        ]
    })
}

exports.default = () =>{
    bundle()
    compileSass()   
    server()
    watch('./src/sass/**/*.scss',compileSass).on('change',reload)
    watch('./src/**/*.{js,jsx,svg}',bundle).on('change',reload)
}