const { merge } = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync(path.resolve(process.env.HOME, '.ssl/localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(process.env.HOME, '.ssl/localhost.pem')),
      },
    },
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    // Watch the template file for changes
    watchFiles: [path.resolve(__dirname, 'src/template.html')],
  },
});