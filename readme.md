# Trinity Mirror Traffic App

## Description


## Dependencies

- NodeJS
  - Grunt
  - LESS CSS
  - Bower

## Instructions

These instructions expect that you have Ruby and NodeJS already installed.

### Setup Development Area

You will need NodeJS installed on your development machine before running t

```
npm install
npm install bower
bower install
```

### Setup Development Area

```
bundle install
npm install
npm install bower
bower install
```

### Run Development Server

```
grunt
```

Visit the url [localhost:3000](http://localhost:3000/) to view the site.

### Running Tests

Tests are run via our CI server, CodeShip, on every branch when pushed to this repository. To test locally run the `grunt test` command from your command line.

```
grunt deploy
```

This will produce a `./site` folder that can be uploaded to the server.

## Documentation

During the Alpha/Beta stages, due to constant changes, documentation will be mainly written in-line. With a dedicated section being created at the first major release.

### File Structure

```
|- _site                 –  compiled development files (not committed)
|- src
|  |- _includes          –  partial snippets of code to be used
|  |- bower_components   -
|  |- less               -  precompiled CSS files
|  |- static
|  |  |- css             -  compiled CSS
|  |  |- gui             -
|  |  |- js              -
|  |- .html              -  html views
|- gruntfile.js
|- package.json
|- readme.md
```

## Report Issues

If you spot any issues please create a ticket via GitHub's Issue Tracker. If the issue is security related please use the contact information below.

## Contribute

In lieu of a formal style guide, take care to maintain the existing coding style.

## Contact

[tmcreative@trinitymirror.com](mailto:tmcreative@trinitymirror.com)

## License

The source is opened for educational purposes. No rights are assigned to any downloads or forks.

## Copyright

Unless otherwise stated all code and content remain copyright &copy; Trinity Mirror. All rights reserved.
