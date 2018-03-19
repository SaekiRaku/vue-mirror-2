const webpack = require("webpack");
const merge = require("webpack-merge")
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const path = require("path");

module.exports = merge(require("./basic.config.js"),{
    devtool:"cheap-source-map",    
    plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new webpack.EvalSourceMapDevToolPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ]
});