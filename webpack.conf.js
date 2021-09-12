'use strict'
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 消除多余CSS
const glob = require('glob-all');
const PurifyCss = require('purifycss-webpack');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '/'),
  entry: {
	app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': resolve('src'),
      // '@scss': resolve('src/assets/styles'),
      // '@components': resolve('src/components'),
      // '@view': resolve('src/views')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
	  {
	      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	      use: {
	          loader: 'url-loader',
	   },
	   {
	       test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	       use: {
	           loader: 'url-loader',
	       }
	       
	   }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css'
    }),
    new PurifyCss({
        paths: glob.sync([ // 传入多文件路径
            path.resolve(__dirname, './*.html') // 处理根目录下的html文件
        ])
    })
  ]
}
