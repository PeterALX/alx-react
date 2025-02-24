const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
	entry: {
		header:'./modules/header/header.js', 
		body:'./modules/body/body.js', 
		footer:'./modules/footer/footer.js', 
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
		clean:true,
	},
	devServer: {
		port: 8564,
	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					/**
					file-loader causes the image not to display, and outputs two
					images instead of 1. My guess is that this is because image-webpack-loader
					is deprecated and therefore broken.image-webpack-loader
					works fine if file-loader is removed, for the css img url in this task
					it is left this way because the checker demands it
					*/
					// 'file-loader', 
					{
						loader: 'image-webpack-loader',
					}
				]},
		]
	}
}
// clean-webpack-plugin
// path.resolve(__dirname,
// ./public
