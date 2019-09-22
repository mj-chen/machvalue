const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !=='production';
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
const copyWebPackPlugin = new CopyWebpackPlugin([{
  from:'src/assets/img/favicon.png'
}])
const htmlPlugin = new HtmlWebPackPlugin({
    template:"./src/index.html",
    filename:"./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename:"[name].css",
    chunkFilename:"[id].css",
});

const uglifyJsPlugin = new UglifyJsPlugin();
const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin();

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback:true
  },
  optimization: {
    minimizer: [uglifyJsPlugin, optimizeCSSAssetsPlugin],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [htmlPlugin, miniCssExtractPlugin, copyWebPackPlugin]
};