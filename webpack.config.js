const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './script.js',
    mode: isProduction ? 'production' : 'development',
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dir'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'img', to: 'img' }],
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
}
