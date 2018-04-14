const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

console.log('webpack是一个构造函数吗')
console.log(webpack)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

// Serve the files on port 3000.
app.listen(3001, function () {
    console.log('Example app listening on port 3000!\n');
});