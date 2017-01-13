const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react', 'stage-2']}
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public')
    }
}