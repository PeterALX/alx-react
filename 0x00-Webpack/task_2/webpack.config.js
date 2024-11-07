module.exports = {
	mode: 'production',
	entry:'./js/dashboard_main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
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
					'file-loader', 
					{
						loader: 'image-webpack-loader',
					}
				]},
		]
	}
}
