const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: false, 
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    }, 
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    resolve : {
        extensions: ['.js', '.jsx']
    },
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            }
        ],
        
    }, 
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true, 
        port: 3000,
        open: true
    }
};