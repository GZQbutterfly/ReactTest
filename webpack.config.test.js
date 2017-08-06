// const path = require('path');
// path.resolve(__dirname, 'dist')
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// shell : npm run webpackTest
module.exports = {
    entry: {
        main: __dirname + '/testSrc/app/main.js',
        commons: __dirname + '/testSrc/app/asset/js/commons.js'
    },
    output: {
        path: __dirname + '/testDist',
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [{
            test: /\.(html|htm)$/,
            use: 'raw-loader'
        }, {
            test: /\.(js|jsx)$/,
            use: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'
        }, {
            test: /\.(less|scss|css)$/,
            //use: ['style-loader', 'css-loader', 'less-loader']
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        // 加载全局依赖库
        new webpack.ProvidePlugin({
            _: 'lodash',
            jQuery: "jquery",
            $: "jquery",
            React: "react",
            ReactDom: "react-dom"
        }),
        // 将js文件里引入的css文件抽取为公共的css
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        // 打包js加入index
        new HtmlWebpackPlugin({
            //filename: 'index',
            template: 'testSrc/index.html',
            inject: 'body',
            favicon: 'testSrc/app/asset/images/favicon.png'
        })
    ]
};
//  entry string: './main.js' 单个文件入口； Object：{main:'./**/main.js',commons:'./**/common.js'} 多个文件入口;
//        Array: ['./commons.js', './main.js'] 会将数组值的路径依次写入
//  filename：固定输出（bundle.js）;[name] 多个文件输出
// entry: {
//     home: "./testSrc/home.js",
//     about: "./testSrc/about.js",
//     contact: "./testSrc/contact.js",
//     test: './testSrc/test.js'
//},
//entry: ['./testSrc/test.js', './testSrc/main.js'],
