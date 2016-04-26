# gulp-bower-check

Checks that dependencies specified as repositories (git urls) points to the tags. 

## Setup
If you haven't used [Gulp](http://gulpjs.com/) before. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-bower-check --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
require('gulp-bower-check')(gulp)
```

## Using gulp-bower-check

Just run

```shell
gulp gulp-bower-check
```

# How it works

Module checks bower.json file, which is expected to be in the same directory as gulpfile.js. If any of 
 repository dependencies don't point to tag you will see an error about that.
 
 For example you have bower.json
 
 ```
 "dependencies": {
         "angular": "1.4.8",
         "angular-animate": "1.4.8",
         ...
         "custom-library": "git@github.com:custom/library.git#branch-1"
     },
 ```
 
 so, this plugin goes through all your dependencies and checks where you are pointing to GitHub directly.
 
 Why do you need to point directly to GitHub? For example you have some private library and don't want to 
 publish it to NPM repo but keep your library only in GitHub. 
 
 For the example above it will find *custom-library* and will check if *branch-1* is tag or not.
  
 Why do you need to have such check?
 For example if you have your automated release process and you want to verify that all your dependencies points to 
 specific tag, not a branch, that after any commit to that branch you won't be able to have the same distribution again.