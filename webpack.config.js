const path = require('path')
const HtmlWebpackPlagin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path:path.resolve(__dirname,'build'),
        filename:'[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[name].[ext]',
        clean:true,
    },
    resolve:{
        alias:{
            images:path.resolve(__dirname,'src/assets/img')
        }
    },
    module:{
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
          ],
    },
    devServer:{
        port:5000,
        open:true
    },
    plugins:[
        new HtmlWebpackPlagin({
            template:path.resolve(__dirname,'public','index.html')
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        }),
    ]
}