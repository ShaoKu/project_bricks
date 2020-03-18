const path = require('path');
module.exports = {
	context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'project-bricks-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};