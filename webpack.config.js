const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './app'),
    entry: ['webpack-hot-middleware/client?timeout=20000&reload=true',
            './index.js'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/'
        // publicPath: path.resolve(__dirname, './public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
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
    }
}