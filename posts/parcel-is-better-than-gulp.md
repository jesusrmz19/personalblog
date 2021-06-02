---
title: 'Parcel is better than Gulp, for me at least'
description: "Why I don't use Gulp anymore? Why Parcel and how to use it? "
date: '2021-06-02'
---

## But first, what is Parcel?

Parcel is a simple no-configuration web application bundler, it's a tool used to bundle individual modules into a single file that can be executed by the browser. Parcel supports different languages and file types like HTML, CSS, and JavaScript.

Parcel sells itself as a "blazing fast, zero-configuration" bundler, and it works, because as you may know, their main competitor is not very easy to get into, as the learning curve for Webpack can be steep.

And for somebody like myself that has to handle a 9 to 5 while trying to learn new things in the always-changing web development world, a simple, low-configuration bundler it's just what I needed for my client and personal projects.

## What about Gulp?

Before Parcel I used Gulp, and even though Gulp and Parcel are not strictly under the same category because Gulp is a task manager and Parcel is a bundler, I used Gulp in the same way that I use Parcel.

I can't remember how or when I was introduced to Gulp but at first, I thought it was the best thing, you could use browser-sync, scss, and even optimize your images for production. You only had to create a config file in the root folder, but once you got the hang of it, it was no issue, besides, you can always just copy-paste things if you have the same folder structure.

Here's what my file looked like:

```
const jsPath = 'src/assets/js/**/*.js';
const cssPath = 'src/assets/css/**/*.css';

function buildHTML() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}

function exportDocs() {
  return src('src/assets/docs/*').pipe(gulp.dest('dist/assets/docs'));
}

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));
}

function fontsTask() {
  return src('src/assets/fonts/**/*').pipe(gulp.dest('dist/assets/fonts'));
}

function imgTask() {
  return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

exports.exportDocs = exportDocs;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.fontsTask = fontsTask;
exports.imgTask = imgTask;

exports.build = parallel(
  buildHTML,
  cssTask,
  jsTask,
  exportDocs,
  fontsTask,
  imgTask
);
```

## If it worked, why change?

I didn't look for an alternative, I was introduced to it during a JavaScript course and it was so easy to implement and use that just went for it. Only one npm install, write a couple of scripts and that was it, no more configuration.

It did the same thing I was doing with Gulp, except for the images "optimization", and I put that in quotes because I realized after a couple of uses that Gulp was not optimizing anything, I know it's highly likely that I wasn't doing something right but who has time to find out if I can always optimize all my images with a CDN or manually with a converter.

## So how do you use Parcel?

I normally install Parcel in all my local projects. After the npm init and getting my package.json file you go to the CLI and write: `npm install parcel --save-dev`.

The only thing that remains after this is creating your scripts to run and build your project. So go ahead and add the scripts below to your package.json:

```
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
}
```

Now Parcel should be up and running, you can even add SCSS to it if you want to, I do it all the time as I prefer the SCSS approach to projects but hey, it's up to you at the end.

In the end, if you already use Gulp or Parcel, that's great too. I would like to know how are you using them, what kind of tasks are you delegating Gulp? could be fun to know, as I only did simple things but I'm sure that's just the surface of the tool.
