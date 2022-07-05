import gulp from 'gulp';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import del from 'del';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config.cjs';
import gcmq from 'gulp-group-css-media-queries';

const server = browserSync.create();
const sass = gulpSass(dartSass);

const css = () =>
  gulp.src('source/sass/style.scss', {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      grid: true,
    })]))
    .pipe(gcmq()) // выключите, если в проект импортятся шрифты через ссылку на внешний источник
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', {sourcemaps: "."}))
    .pipe(server.stream());

const js = () =>
  gulp.src(['source/js/main.js'])
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/js'));

const svgo = () =>
  gulp.src('source/img/**/*.{svg}')
    .pipe(imagemin([
      imagemin.svgo({
          plugins: [
            {removeViewBox: false},
            {removeRasterImages: true},
            {removeUselessStrokeAndFill: false},
          ]
        }),
    ]))
    .pipe(gulp.dest('source/img'));

const sprite = () =>
  gulp.src('source/img/sprite/*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite_auto.svg'))
    .pipe(gulp.dest('build/img'));

const copySvg = () =>
  gulp.src('source/img/**/*.svg', {base: 'source'})
    .pipe(gulp.dest('build'));

const copyImages = () =>
  gulp.src('source/img/**/*.{png,jpg,webp}', {base: 'source'})
    .pipe(gulp.dest('build'));

const copy = () =>
  gulp.src([
    'source/**.html',
    'source/fonts/**',
    'source/img/**',
    'source/favicon/**',
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));

const clean = () => del('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'sitemap.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/**.html', gulp.series(copy, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series(css));
  gulp.watch('source/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, refresh));
  gulp.watch('source/img/**/*.{png,jpg,webp}', gulp.series(copyImages, refresh));

  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, svgo, copy, css, sprite, js);

const start = gulp.series(build, syncServer);

// Optional tasks
//---------------------------------

// Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
// а не все изображения в img во всех папках.

// root = '' - по дефолту webp добавляются и обналяются во всех папках в source/img/
// root = 'content/' - webp добавляются и обновляются только в source/img/content/

const createWebp = () => {
  const root = '';
  return gulp.src(`source/img/${root}**/*.{png,jpg}`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`source/img/${root}`));
};

const optimizeImages = () =>
  gulp.src('build/img/**/*.{png,jpg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
    ]))
    .pipe(gulp.dest('build/img'));

export { optimizeImages as imagemin, createWebp as webp, build, start };

