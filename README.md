# gulp-bower-check

Checks that dependencies specified as repositories (git urls) points to the tags. 

## Setup
If you haven't used [Gulp](http://gulpjs.com/) before. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-bower-check --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
require('gulp-bower-check');
```

## Using gulp-bower-check

Just run

```shell
gulp gulp-bower-check
```

# How it works

Module checks bower.json file, which is expected to be in the same directory as gulpfile.js. If any of 
 repository dependencies don't point to tag you will see an error about that.