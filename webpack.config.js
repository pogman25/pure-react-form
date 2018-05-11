const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        modules: ['node_modules'],
        alias: {
            src: path.resolve(__dirname, '../src')
        }
    },
    entry: {
        main: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: path.join('assets', 'js', '[name].[hash:3].js'),
        chunkFilename: '[name].[hash:3].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                localIdentName: '[hash:base64:6]',
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                }),
                include: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial'
                }
            }
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: getPath => getPath('assets/css/[name][hash:5].css'),
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};
