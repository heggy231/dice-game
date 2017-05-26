/* eslint comma-dangle: ['error',
 {'functions': 'never', "arrays": "only-multiline", "objects":
 "only-multiline"} ] */
const path = require('path');
const webpack = require('webpack');

const ROOT_DIR = path.resolve('./');
const JS_SRC_DIR = `${ROOT_DIR}/js`;



module.exports = {
	entry: {
		app: [
			`${JS_SRC_DIR}/app.js`
		],
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: path.resolve(JS_SRC_DIR),
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['react', 'es2015']
				}
			},
		]
	},

	plugins: [
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	output: {
		path: ROOT_DIR,
		filename: 'bundle.js'
	}
};
