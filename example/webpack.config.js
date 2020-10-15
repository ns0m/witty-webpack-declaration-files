'use strict';
const path = require('path');
const DeclarationFilesPlugin = require('@ns0m/witty-webpack-declaration-files');

module.exports = {
    devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    plugins: [
        new DeclarationFilesPlugin({
            filename: 'main.d.ts',
            merge: true
        })
    ]
};
