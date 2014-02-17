/**
 * This is Activeark JWT's default Gruntfile, feel free to edit to your
 * own taste, but remember to add it to .gitignore if you do.
 */
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %>\n <%= grunt.template.today("yyyy-mm-dd") %>\n Author:<%= pkg.author %>\n License: <%= pkg.license %>\n*/\n',
		'jsmin-sourcemap': {
			all: {
				src: ['assets/src/js/main.js', 'assets/src/js/**/*.js'],
				dest: 'assets/js/project.min.js',
				destMap: 'assets/js/project.map.js'
			},
		},
		sass: {
			dist: {
				files: {
					'assets/css/project.css': ['assets/src/scss/*.scss']
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'assets/css/project.min.css': ['assets/css/*.css']
				}
			}
		},
		watch: {
			scss: {
				files: 'assets/src/scss/**/*.scss',
				tasks: ['sass',]
			},
			css: {
				files: 'assets/css/**/*.css',
				tasks: ['cssmin',]
			},
			js: {
				files: ['assets/src/js/**/*.js'],
				tasks : ['jsmin-sourcemap']
			},
			options: {
				livereload: false
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-jsmin-sourcemap');

	grunt.registerTask('default', ['jsmin-sourcemap', 'sass', 'cssmin']);
	grunt.registerTask('dev', ['watch']);
};
