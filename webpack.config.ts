import * as path from 'path';
import type {Configuration, WebpackPluginInstance} from 'webpack';
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import  ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = (name: string): string => isDev ? `[name].${name}` : `[name].[hash].${name}`
const plugins = () => {
    const base: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify  : {collapseWhitespace: isProd}
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ]
    isProd && base.push(...[
        new BundleAnalyzerPlugin(),
    ])

    return base
}
const devServer: DevServerConfiguration = {
    static  : {
        directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port    : 9000,
}

const config: Configuration = {
    devServer,
    entry  : path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: isDev ? 'source-map' : false,
    module : {
        rules: [
            {
                test   : /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use    : {
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/typescript', ["@babel/preset-react", {"runtime": "automatic"}]]
                    }
                }

            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use : 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts','.jsx', '.js'],
    },
    output : {
        filename: filename('bundle.js'),
        path    : path.resolve(__dirname, 'dist'),
    },
    plugins: plugins(),
}

export default config;