const path = require('path')

const HtmlWebpPlugin = require('html-webpack-plugin')
const ReactRefreshWebpPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpPlugin(),
    new HtmlWebpPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [isDevelopment && require('react-refresh/babel')].filter(
              Boolean
            )
          }
        }
      },
      {
        test: /\.scss$/, //ao invés de test: /\.css$/
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'] //acrescenta-se a sass-loader
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        loader: 'url-loader' //file-loader
      }
    ]
  }
}
