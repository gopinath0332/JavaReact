const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
   entry: {
      app: "./src/index.js"
   },
   output: {
      filename: "[name].build.js",
      path: path.resolve(__dirname, "../../webapp/resources/dist")
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
   ],
   module: {
      rules: [{
         test: /\.css$/,
         use: [
            'style-loader', 'css-loader'
         ]
      },{
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-0',"es2017"],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy',"transform-object-rest-spread"],
          }
      },  {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
          {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
          }]
   }
}