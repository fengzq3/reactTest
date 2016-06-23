# React 14个简单案例，学习 webpack+react

`react` 入门案例，全局采用webpack打包，14个案例帮理解react使用。

### 使用方法
1、首选克隆到本地：

     git clone https://github.com/fengzq3/reactTest.git

2、然后执行：`npm install` 安装扩展

3、最后执行：`webpack` 编译jsx文件，执行成功后这时会看到build 目录，里面是编译好的js文件

4、运行 html 文件，查看！

### 目录

- src 项目目录
    - js `jsx` 文件目录
- build 生成后会出现
- .gitignore git配置文件
- jsconfig.json VS-Code 配置文件
- package.json npm用
- webpack.config.js webpack配置文件

### 关于DEMO项目

先说一下webpack配置，上配置文件：
```javaScript
var webpack = require('webpack');
module.exports = {
    //提取公共lib
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        //压缩js配置，如果用于生产环境，启用
        //new webpack.optimize.UglifyJsPlugin({
        //    compress:{
        //        drop_console:true,
        //        warnings:false
        //    }
        //}),
        //这里设置全局jquery 和 React ReactDOM 就不用在每个js中引用了
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
        demo13: './src/js/demo13.jsx',
        demo14: './src/js/demo14.jsx'
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
                loader: 'babel',        //采用babel解析编译jsx文件
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        alias: {
            jquery: './jquery-1.11.3.min'
        }
    }

};

```

其中需要注意的是，在使用 `babel6` 编译react JSX 文件时，会报错，需要单独配置：`presets` 选项。

这里需要两个插件：
```
babel-preset-es2015 //es6插件
babel-preset-react  //react插件
```

> 什么，还不知道什么是 `jsx` ？ [看这里](https://facebook.github.io/react/docs/jsx-in-depth.html)

## 详细文件

#### index.jsx