import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import {compileStyles, compileMinStyles} from './gulp/compileStyles.mjs';
import { copy, copyImages, copySvg } from './gulp/copyAssets.mjs';
import {compileMainMinScripts, compileMainScripts, compileVendorScripts} from './gulp/compileScripts.mjs';
import {optimizeSvg, sprite, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.mjs';

const server = browserSync.create();
const streamStyles = () => compileStyles().pipe(server.stream());

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
  gulp.watch('source/sass/**/*.{scss,sass}', streamStyles);
  gulp.watch('source/js/**/*.{js,json}', gulp.series(compileMainScripts, compileVendorScripts, refresh));
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

const build = gulp.series(clean, copy, sprite, gulp.parallel(compileMinStyles, compileMainMinScripts, compileVendorScripts, optimizePng, optimizeJpg, optimizeSvg));
const dev = gulp.series(clean, copy, sprite, gulp.parallel(compileMinStyles, compileMainMinScripts, compileVendorScripts, optimizePng, optimizeJpg, optimizeSvg), syncServer);
const start = gulp.series(clean, copy, sprite, gulp.parallel(compileStyles, compileMainScripts, compileVendorScripts), syncServer);

export { createWebp as webp, build, start, dev};
