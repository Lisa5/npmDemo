var path = require('path')
var ora = require('ora')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

module.exports = {
    mode: 'production',
    entry: path.resolve('./src/main.js'),
    output: {
        filename: 'main123.js',
        path: path.join(__dirname, 'dist')
    },
    resolve:{
        extensions:['.vue','.js','.json']
    }
}

spinner.stop()