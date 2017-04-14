module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					compress: false,
    					sourcemap: 'none'
				},
				files: {
					'assets/css/style.css' : 'assets/sass/style.scss'
				}
			}
		},
		cssmin: {
			dist: {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.min.css'
			}
		},
		webpack: {
			dist: {
				context: __dirname,
				entry: "./assets/js/scripts.js",
			    output: {
			        path: "./assets/js/",
			        filename: "scripts.min.js"
			    }
			}
		},
		uglify: {
			dist: {
				files: {
			        'assets/js/script.min.js': ['assets/js/script.js'],
			    },	
			},
		},
		sprite:{
		      	all: {
		        	src: 'assets/img/sprite/*.png',
		        	dest: 'assets/img/sprite.png',
		        	retinaSrcFilter: 'assets/img/sprite/*@2x.png',
		        	retinaDest: 'assets/img/sprite@2x.png',
		        	destCss: 'assets/css/spritesmith.css',
		        	padding: '1px'
		      	}
	    	},
		watch: {
			css: {
				files: ['assets/sass/*.scss','assets/sass/pages/*.scss'],
				tasks: ['sass:dist']
			},
			cssmin: {
				files: ['assets/css/style.css'],
				tasks: ['cssmin:dist']	
			},
			webpack: {
				files: ['assets/js/module/*.js'],
				tasks: ['webpack:dist']
			},
			sprite: {
				files: ['assets/img/sprite/*.'],
				tasks: ['sprite:all']
			},
			js: {
				files: ['assets/js/script.js'],
				tasks: ['uglify:dist']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.registerTask('default',['watch']);
}