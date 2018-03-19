var path = require("path");

var utils = require("./utils");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry: {
        document: ["webpack-hot-middleware/client?reload=true", path.resolve(utils.path.document, "index.js")]
    },
    output: {
        filename: '[name]/[name].js',
        path: utils.path.dist,
        publicPath: "/",
        library:"youth",
        libraryTarget:"umd"
    },
    externals: {
        vue: {
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
            root: 'Vue',
            var: 'Vue'
        }
    },
    resolve: {
        extensions: [".js"],
        alias: {
            'vue$': 'vue/dist/vue.js',
            "core": path.resolve(utils.path.source, "core"),
            "component": path.resolve(utils.path.source, "component"),
            "common": path.resolve(utils.path.source, "common"),
            "utils": path.resolve(utils.path.source, "utils"),
            "style": path.resolve(utils.path.source, "style")
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(less|css)$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    performance:{
        hints:false
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(utils.path.document, "index.html"),
            inject: "body",
            chunks: ["document"],
            minify: {
                minifyCSS: process.env.NODE_ENV === "production",
                minifyJS: process.env.NODE_ENV === "production",
                minifyURLs: process.env.NODE_ENV === "production",
                removeComments: process.env.NODE_ENV === "production"
            }
        })
    ]
}