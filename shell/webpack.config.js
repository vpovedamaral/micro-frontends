const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3000/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { presets: ['@babel/preset-react'] },
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                header: 'header@http://localhost:3001/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^17.0.2' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.2' },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
