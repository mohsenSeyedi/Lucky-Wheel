const front = require('laravel-mix');

front.autoload({ jquery: ['$', 'jQuery','window.jQuery'] });

front.options({
    fileLoaderDirs: {
        fonts: 'font',
        images: 'media'
    },

    webpackConfig: {
        infrastructureLogging: {
            level: 'error'
        }
    }
});

front.setResourceRoot('../');
front.setPublicPath('dist');

front.version();

front.js([
    'node_modules/persian-datepicker/dist/js/persian-datepicker.js',
    'src/js/index.js',
], 'dist/js/bundled.js');

front.sass('src/scss/index.scss', 'dist/css/app.css');

