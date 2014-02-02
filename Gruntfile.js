module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'components/jquery/', src:['**/*.js'], dest:'js/ven'},
					{expand: true, cwd: 'components/d3/', src:['*.js'], dest:'js/ven'},
					{expand: true, cwd: 'components/twitter/dist/js/', src:['**/*.js'], dest:'js/ven'},
					{expand: true, cwd: 'components/twitter/dist/css/', src:['**/*.css'], dest:'css/ven', filter:'isFile'},
					{expand: true, cwd: 'components/underscore/', src:['*.js'], dest:'js/ven'},
					// {src:['jquery/*.js'], cwd:'/components/', dest:'/js/',flatten:true},
					// {src:['components/jquery/*.js'], dest:'js/'}
					// {src:['*.js'], cwd:'bower_components/underscore/', dest:'js/'},
					// {src:['*.js'], cwd:'bower_components/twitter/js', dest:'js/'},
					// {src:['*.js'], cwd:'bower_components/d3/',  dest:'js/'},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);
};
