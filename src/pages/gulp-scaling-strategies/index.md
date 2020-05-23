---
title: Strategies for Gulp.js at scale
date: 2018-02-14 19:50:03
tags: [javascript, gulp, taskrunners, build, tooling]
---

Gulp is a great tool for running tasks. It saves us loads of time while development and is very handy when it comes to building websites. We automate a lot of stuff using gulp (like transpiling JS using [Babel](https://babeljs.io/) and auto-prefixing CSS using [PostCss](http://postcss.org/)) and as our projects grew, the number of tasks we had to manage also grew.

## The problem with Gulp

Soon we had two major problems at hand,

- The gulpfiles were huge, with common code scattered all over.
- Running these tasks took some time.

This was a problem since changing something in a task meant changing it in ~10 projects. Also since tasks took sometime to complete, development no longer felt instant.

While there seem to be very less literature regarding best practices when it comes to using gulp at scale, here are a few tips based on what we're doing at work.

## Moving tasks out into files

The easiest way to reduce the complexity is to move out all your tasks into separate files of their own. Also you could also extract out helpers for fetching third party files or any similar repetitive bits of code into an `utils/` folder.

An example task could look like,

```javascript
/*
 * tasks/cleanFiles.js
 * Clean build artifacts and temp files
 */
module.exports = function(gulp, config) {
  return function() {
    const rimraf = require('rimraf')
    const folders = ['build', 'tmp', 'public']

    folders.map(folder => {
      let path = path.join(process.cwd(), folder)
      return rimraf(path)
    })

    return Promise.all(folders)
  }
}
```

## Extracting configuration out of tasks

An easy way to make your tasks easier to maintain is by separating out folder paths, constants etc into a configuration file. A config file also makes it very easy to implement feature flags that you can use to toggle the behavior of certain tasks.

```javascript
/*
 * tasks/processJs.js
 * transpiles and lints JS files
 */
module.exports = function(gulp, config) {
  return function() {
    const babel = require('gulp-babel')
    const eslint = require('gulp-eslint')
    const { babelOptions, eslintOptions } = config

    return gulp
      .src('assets/js/*.js')
      .pipe(eslint(eslintOptions))
      .pipe(babel(babelOptions))
      .pipe(gulp.dest('dist/assets/js'))
  }
}

/* gulpfile.js */
const gulp = require('gulp')
const config = require(path.join(process.cwd(), 'config'))

const processJSFiles = require('./tasks/processJs')(gulp, config)

gulp.task('js', processJSFiles)
```

The snippet above is a great example where moving configuration out of tasks is really useful. Having a configuration file means that you can define babel and eslint options inside that instead of specifying it inside your task. This is very handy when reusing the same gulpfiles for multiple projects.

## Managing sequential and parallel tasks

The default task queuing syntax in gulp is usually very non-intuitive and hard to manage. [Gulp-sequence](https://www.npmjs.com/package/gulp-sequence) is an excellent alternative.

We usually don't define task dependencies (tasks that should run before a task) and instead use gulp-sequence to run tasks exactly in the order we want them to (even if that means defining additional tasks that are a collection of other tasks).

## Rebuild only changed files

A lot of tasks in gulp usually look like this,

```javascript
gulp.task('transpile', function() {
  return gulp
    .src('assets/js/*.js')
    .pipe(babel(options))
    .pipe(gulp.dest('dist/assets/js'))
})

gulp.watch('assets/js/*.js', ['transpile'])
```

This quickly starts slowing down your rebuilds as the number of files start increasing since all files are run through the task every time a change event is fired. An easy workaround for this is to use [gulp-newer](https://www.npmjs.com/package/gulp-newer) (you could also try [gulp-changed](https://github.com/sindresorhus/gulp-changed)) to process only files that have changed.

## Write performance intensive tasks directly in Node

One of the biggest issues with gulp is that it isn't very fast when it comes to things like copying a lot of files (around 10,000 of them) from one place to another. So instead of doing this,

```javascript
return gulp.src('assets/images/**/*.*').pipe(gulp.dest('assets/images/**/*.*'))
```

do it like this,

```javascript
const copy = require('cpy')

await copy('assets/images/**/*.*', 'dist', {
  parents: true,
})
```

In most cases, you can find a node module that does what you're doing with gulp, exponentially faster. So find a package or get your hands dirty and write one.

## Bundle it all into a module

If you're using these same tasks across multiple projects, then you should really think about packaging your gulpfile and tasks into a node module and installing it as a dependency in your project. If you've already fleshed out a configuration file then things get even easier.

There should be enough guides on how to create a node module but the gist is that you have to put all your stuff into a folder, npm init and follow through. In your [package.json](https://docs.npmjs.com/files/package.json#bin) make sure you specify the the executable file (the gulpfile in most cases) in the `bin` field.

```json
{
  "name": "myGulpModule",
  "version": "0.0.1",
  "main": "./gulpfile.js",
  "bin" : {
    "myGulpModule" : "./gulpfile.js"
  },
  "dependencies": { ... }
}
```

You can now add "myGulpModule" as a dependency on your projects and run it via

```bash
./node_modules/.bin/myGulpModule myTaskName
```

Oh wait, did I mention you've built an entire CLI now ? (ᵔᴥᵔ)

### Related Reading

[Let's scale that Gulpfile.js](http://www.drinchev.com/blog/let-s-scale-that-gulpfile-js/) - Ivan Drinchev
[Awesome Gulp](https://github.com/alferov/awesome-gulp) - Philipp Alferov
