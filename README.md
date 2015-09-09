# NowTV Pairing Exercise App

This is a starter app for the bill-test. It has the following setup ready to use:
* Cucumber
* Webpack
* React	
* Alt


It includes a few feature tests to define expected behaviour along with the underlying steps although feel free to change these during the exercise as they make some assumptions about the UI.


## Install dependencies

### Install Node modules

```
npm install
```

### Install gulp globally

```
npm install gulp -g
```

### Install libjpeg, imagemagick and Phantomjs

```
brew install libjpeg imagemagick phantomjs
```


### Install Ruby

```
rvm install ruby-2.2.1
```

### Install Rubygems

```
cd test
gem install bundler
bundle install
```

## Development Server

Run the following command from the root directory of the project.

```
npm start
```
and navigate to ```http://localhost:8080/dist```

## Features

Feature tests must be run from the root directory of the project. 

### Run all
 
```
gulp 
```

### Run a single feature

```
gulp runFeature --file <feature_name>
```

