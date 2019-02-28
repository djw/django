var globalThreshold = 50;  // Global code coverage threshold (as a percentage)

module.exports = function(grunt) {
    grunt.initConfig({
        qunit: {
            all: ['js_tests/tests.html']
        },
        uglify: {
            admin: {
                options: {
                    output: {
                        max_line_len: 500
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'django/contrib/admin/static/admin/js/',
                    dest: 'django/contrib/admin/static/admin/js/',
                    src: ['actions.js', 'collapse.js', 'inlines.js', 'prepopulate.js'],
                    rename: (dest, src) => {
                        return dest + '/' + src.replace('.js', '.min.js');
                    }
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('test', ['qunit']);
    grunt.registerTask('default', ['test']);
};
