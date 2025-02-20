const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    // Watch the template file for changes
    watchFiles: [path.resolve(__dirname, 'src/template.html')],
  },
});
