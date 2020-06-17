'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js',
        publicPath: '/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    'thread-loader',
                    'babel-loader'
                ]
            },
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 version', '>1%']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 version', '>1%']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]',
                            publicPath: 'images/',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8][ext]'
                        }
                    }
                ]
            }
        ]
    },
    //多入口用这个分离业务公共包
    // optimization: {
    //     splitChunks: {
    //         minSize: 0,
    //         cacheGroups: {
    //             commons: {
    //                 name: 'commons',
    //                 chunks: 'all',
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
    plugins: [
        new webpack.DefinePlugin({
            'BASE_API': JSON.stringify('/doubletop/'),
            'BASE_API_JSON': JSON.stringify('/res/doubleTop/home/'),
            'BASE_IMG_URI': JSON.stringify('/res/doubleTop/home/')
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/library/library.json')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/templates/index.cshtml'),
            filename: 'index.cshtml',
            chunks: ['index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './build/library/*.js'),
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './build/jquery/*.js'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                  from: path.resolve(__dirname, './static'), 
                  to: 'static'
                }
            ],
        }),
        new BundleAnalyzerPlugin()

        
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry:  'https://cdn.bootcdn.net/ajax/libs/react/16.13.1/cjs/react.production.min.js',
        //             global: 'react'
        //         },
        //         {
        //             module: 'react-dom',
        //             entry: 'https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/cjs/react-dom.production.min.js',
        //             global: 'react-dom'
        //         }
        //     ]
        // })
    ],
    devtool: 'source-map'
};


