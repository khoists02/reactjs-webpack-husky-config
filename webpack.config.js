const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-hot-loader': path.resolve(path.join(__dirname, './node_modules/react-hot-loader')),
      // add these 2 lines below so linked package will reference the patched version of `react` and `react-dom`
      'react': path.resolve(path.join(__dirname, './node_modules/react')),
      'react-dom': path.resolve(path.join(__dirname, './node_modules/react-dom')),
      // or point react-dom above to './node_modules/@hot-loader/react-dom' if you are using it
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: false,
    contentBase: './public',
    hot: true,
    port: 3000,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack configuration with reactjs !',
      template: './src/assets/templates/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
  ],
}
