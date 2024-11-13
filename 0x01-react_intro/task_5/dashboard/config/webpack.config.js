const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		static:{
			directory: path.resolve(__dirname, '..', 'dist'),
		},
		port:3000,
		hot: true,
	},
	module: {
		rules: [
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader']
			},
			{
				test: /\.(js|jsx)$/i,
				use: 'babel-loader', 
			}
		]
	}
}
