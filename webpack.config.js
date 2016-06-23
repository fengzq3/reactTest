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
        //new webpack.optimize.UglifyJsPlugin({
        //    compress:{
        //        drop_console:true,
        //        warnings:false
        //    }
        //}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })

    ],
    //页面入口
    entry: {
        index: './src/js/index.jsx',
        demo2: './src/js/demo2.jsx',
        demo3: './src/js/demo3.jsx',
        demo4: './src/js/demo4.jsx',
        demo5: './src/js/demo5.jsx',
        demo6: './src/js/demo6.jsx',
        demo7: './src/js/demo7.jsx',
        demo8: './src/js/demo8.jsx',
        demo9: './src/js/demo9.jsx',
        demo10: './src/js/demo10.jsx',
        demo11: './src/js/demo11.jsx',
        demo12: './src/js/demo12.jsx',
        demo13: './src/js/demo13.jsx'
    },
    //输出配置
    output: {
        path: './build/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(jpg|png)$/, loader: 'url?limit=8192' }
        ]
    },
    resolve: {
        alias: {
            jquery: './jquery-1.11.3.min'
        }
    }

};