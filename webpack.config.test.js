// const path = require('path');
// path.resolve(__dirname, 'dist')
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
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
            test: /\.js|jsx$/,
            use: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //filename: 'index',
            template: 'testSrc/index.html',
            inject: 'body',
            favicon: 'testSrc/app/asset/images/favicon.png',
        }),
        new webpack.ProvidePlugin({
            //$: "jquery",
            React: "react",
            ReactDom: "react-dom"
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
