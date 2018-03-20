var webpack = require("webpack");
var merge = require("webpack-merge")
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var path = require("path");

var utils = require("./utils");

module.exports = merge(require("./basic.config.js"),{
    entry: {
        document: ["webpack-hot-middleware/client?reload=true", path.resolve(utils.path.document, "index.js")],
    },
    devtool:"cheap-source-map",    
    plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new webpack.EvalSourceMapDevToolPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ]
});