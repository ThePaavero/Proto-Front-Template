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
			}
		},
		typescript: {
			base: {
				src: ['assets/src/ts/**/*.ts'],
				dest: 'assets/src/js/compiled_typescript.js',
				options: {
					module: 'amd', //or commonjs
					target: 'es5', //or es3
					base_path: 'assets/src/ts',
					sourcemap: true,
					declaration: true
				}
			}
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
					'assets/css/project.min.css': ['assets/css/project.css']
				}
			}
		},
		watch: {
			scss: {
				files: 'assets/src/scss/**/*.scss',
				tasks: ['sass', 'beep:3']
			},
			css: {
				files: 'assets/css/assets/css/project.css',
				tasks: ['cssmin']
			},
			ts: {
				files: ['assets/src/ts/**/*.ts'],
				tasks : ['typescript']
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
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-beep');

	grunt.registerTask('default', ['jsmin-sourcemap', 'sass', 'cssmin']);
	grunt.registerTask('dev', ['watch']);
};
