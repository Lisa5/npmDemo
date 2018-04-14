
const webpack = require('webpack')
const mergeConfig = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');

module.exports = mergeConfig(commonWebpackConfig,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "../dist",
        hot: true
    },
    resolve: {
        extensions: ['.vue', '.js', '.json']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
