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
                test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000?name=/fonts/[ext]/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                loader: "file-loader?name=/images/[ext]/[name].[ext]"
            },             
            // { 
            //     test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            //     loader: "file-loader?name=/fonts/[ext]/[name].[ext]" 
            // }
        ]
    }
}