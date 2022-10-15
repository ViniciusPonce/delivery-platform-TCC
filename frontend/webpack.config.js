const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const dotenv = require('dotenv').config({ path: __dirname + '/.env.development' })
const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        mimetype: 'image/png'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: ({
                htmlWebpackPlugin
            }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
            'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
        }),
        new NodePolyfillPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
};

module.exports = config;