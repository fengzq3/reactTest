/**
 * Created by FengZQ on 2016/6/12.
 * webpack config file
 */
"use strict";
var webpack = require('webpack');

module.exports = {
    //提取公共lib
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                drop_console:true,
                warnings:false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            React:'react'
        })

    ],
    //页面入口
    entry: {
        index: './src/js/index.js'
    },
    //输出配置
    output: {
        path: './build/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(jpg|png)$/, loader: 'url?limit=8192'}
        ]
    },
    resolve:{
        alias:{
            jquery:'./jquery-1.11.3.min'
        }
    }

};