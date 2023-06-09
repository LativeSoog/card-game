const path = require('path')

module.exports = {
    entry: './script.js',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dir'),
        filename: 'bundle.js',
        clean: true,
    },
}
