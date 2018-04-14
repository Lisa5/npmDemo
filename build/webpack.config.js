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
        app: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "../dist",
        hot: true
    },
    resolve:{
        extensions:['.vue','.js','.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({title: 'Output managrment'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // })
    ]
}

spinner.stop()