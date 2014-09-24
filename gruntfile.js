module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  //  Config
    pkg: grunt.file.readJSON('package.json')
   ,dir: {
      source: 'src'  // <%= dir.source %>/
     ,includes: '<%= dir.source %>/_includes'  // <%= dir.includes %>/
     ,static: '<%= dir.source %>/static'  // <%= dir.static %>/
     ,build: '_site'  // <%= dir.build %>/
   }
  //  Build Site

   ,clean: ['<%= dir.build %>/']

   ,copy: {
      src: {
        files: [
          { expand: true, cwd: '<%= dir.source %>/', src: ['**', '!_includes/**'], dest:'<%= dir.build %>/' }
        ]
      }
     ,bower: {
        files: [
          { expand: true, cwd: '<%= dir.includes %>/bower_components/jquery/', src: ['jquery.min.js'], dest:'<%= dir.build %>/static/js/lib/' }
        ]
     }
   }

   ,express: {
      dev: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: '_site'
        }
      }
    }

   ,watch: {
      less: {
        files: ['<%= dir.includes %>/less/**/*']
       ,tasks: ['less']
      }
     ,image: {
        files: ['<%= dir.static %>/gui/**/*']
      }
     ,js: {
        files: ['<%= dir.static %>/js/**/*.js']
      }
     ,options: {
        livereload: true
      }
    }

  // Compile

   ,less: {
      theme: {
        files: {
          '<%= dir.static %>/css/travel.css': ['<%= dir.includes %>/less/travel.less']
        }
      }
    }

   ,autoprefixer: {
      options: {
        browsers: [
          'last 2 versions'
         ,'ie 8'
         ,'ie 9'
         ,'Android >= 4'
         ,'BlackBerry 7'
         ,'BlackBerry >= 10'
        ],
      },
      files: {
        src: '<%= dir.static %>/css/travel.css'
      },
    }

  // Validate

   ,htmlhint: {
      options: {
        'tag-pair': true
       ,'tagname-lowercase': true
       ,'attr-lowercase': true
       ,'attr-value-double-quotes': true
       ,'doctype-first': true
       ,'spec-char-escape': true
       ,'id-unique': true
       ,'head-script-disabled': true
       ,'style-disabled': true
       ,'src-not-empty': true
       ,'img-alt-require': true
      },
      theme: {
        src: ['<%= dir.build %>/**/*.html']
      }

    }

   ,csslint: {
      options: {
        'adjoining-classes': false
       ,'box-model': false
       ,'box-sizing': false
       ,'regex-selectors': false
       ,'universal-selector': false
       ,'unqualified-attributes': false
       ,'font-sizes': false  //  Until CSSLint has the option to set an amount
      },
      src: [
        '<%= dir.static %>/css/travel.css'
      ]
    }

   ,cssmetrics: {
      theme: {
        src: [
          '<%= dir.static %>/css/travel.css'
        ]
       ,options: {
          quiet: false
         ,maxSelectors: 4096
         ,maxFileSize: 10240000
        }
      }
    }

    ,parker: {
      options: {}
     ,src: [
        '<%= dir.static %>/css/travel.css'
      ]
    }

   ,jshint: {
      options: {
        browser: true
       ,curly: true
       ,eqeqeq: true
       ,eqnull: true
       ,indent: 2
       ,laxbreak: true
       ,laxcomma: true
       ,quotmark: 'single'
       ,trailing: true
       ,undef: true
       ,globals: {
          console: true
         ,module: true
         ,jQuery: true
         ,node: true
        }
      },
      src: ['gruntfile.js','<%= dir.static %>/js/*.js']
    }

  // Optimise

   ,imagemin: {
      options: {
        optimizationLevel: 3
      }
     ,production: {
        files: [{
          expand: true
         ,cwd: '<%= dir.theme %>/gui'
         ,src: ['**/*.{png,jpg,gif,svg}']
         ,dest: '<%= dir.theme %>/gui'
        }]
      }
    }

   ,svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          }
         ,{
            removeUselessStrokeAndFill: false
          }
        ]
      }
     ,dist: {
        files: {
          'dist/unicorn.svg': 'app/unicorn.svg'
            }
        }
    }

   ,hashres: {
      options: {
        encoding: 'utf8',
        fileNameFormat: '${name}.${hash}.${ext}',
        renameFiles: true
      },
      image: {
        src: ['<%= dir.build  %>/gui/**/*.{png,jpg,gif,svg}'],
        dest: '<%= dir.build %>/**/*.{html,css}',
      },
      css: {
        src: ['<%= dir.build  %>/css/**/*.css'],
        dest: '<%= dir.build %>/**/*.html',
      },
      js: {
        src: ['<%= dir.build  %>/js/**/*.js'],
        dest: '<%= dir.build %>/**/*.html',
      }
    }

  });

  // Tasks

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-css-metrics');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-parker');
  grunt.loadNpmTasks('grunt-perfbudget');
  grunt.loadNpmTasks('grunt-svgmin');

  // Options

  grunt.registerTask('default', ['dev', 'serve']);
  grunt.registerTask('test', ['htmlhint', 'cssmetrics', 'csslint', 'parker', 'jshint']);
  grunt.registerTask('optim', ['imagemin']);
  grunt.registerTask('dev', ['clean', 'less', 'copy:src', 'copy:bower']);
  grunt.registerTask('build', ['dev', 'optim']);
  grunt.registerTask('serve', ['express', 'watch']);

};
