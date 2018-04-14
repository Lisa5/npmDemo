const webpack = require('webpack')
const mergeConfig = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');
var config = require('../config')
var path = require('path')

module.exports = mergeConfig(commonWebpackConfig,{
    devtool: 'source-map',
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // })
    ]
})