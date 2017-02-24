const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./front/entry.jsx",
  output: {
    path: path.join(__dirname, "/front/public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`, 'stage-2']
        }
      }, {
        test: /(\.css)$/,
        loaders: ['style', 'css-loader']
      }, {
        test: /\.(svg|png)(\?.*)?$/,
        loader: 'url-loader',
        //exclude: path.join(__dirname, 'ui') // To avoid clash of svgs
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
