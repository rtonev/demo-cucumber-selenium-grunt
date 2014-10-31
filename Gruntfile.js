
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            cucumberjs: {
                files: [
                    '**/*.js',
                ],
                tasks: [
                    'test',
                ],
            },
        },
        run: {
            cucumberjs: {
                cmd: 'cucumber-js',
                args: [
                    '--format pretty',
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('test', [
        'run:cucumberjs',
    ]);
    grunt.registerTask('test-watch', [
        'watch:cucumberjs',
    ]);

};
