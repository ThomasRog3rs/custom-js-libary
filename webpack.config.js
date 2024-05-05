const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimize: false, // Disable minification
    },
    watch: true, // Enable watch mode
};