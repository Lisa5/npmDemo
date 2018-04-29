var path = require('path')
var ora = require('ora')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
var config = require('../config')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js',
        vendor: ['lodash']
    },
    output: {
        filename: '[name].bundle.js',
        path: config.build.assetsRoot,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js', //构建模版相关
          'common': path.resolve(__dirname, '../src/common')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, "../src"),
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "../src"),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, "../src"),
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(config.build.assetsRoot, {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}

spinner.stop()