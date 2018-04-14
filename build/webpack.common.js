var path = require('path')
var ora = require('ora')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

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
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.vue', '.js', '.json']
    },
    module: {
        rules: [
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
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({ title: 'Output managrment' })
    ]
}

spinner.stop()