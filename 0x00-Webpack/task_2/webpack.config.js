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
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable:true,
						}
					}
				]},
		]
	}
}
