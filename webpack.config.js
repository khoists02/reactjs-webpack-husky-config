const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dirName = __dirname

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(dirName, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  devtool: 'inline-source-map',
  devServer: {
    inline: false,
    contentBase: './public',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack configuration with reactjs !',
      template: './src/assets/templates/index.html',
    }),
  ],
}
