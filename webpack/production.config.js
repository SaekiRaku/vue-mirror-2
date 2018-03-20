var utils = require("./utils");
var path = require("path");
var merge = require("webpack-merge");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(require("./basic.config.js"),{
    entry:{
        document: [path.resolve(utils.path.document, "index.js")],
        youth: [path.resolve(utils.path.source, "index.js")]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        new ExtractTextPlugin("./[name]/[name].css")
    ]
});