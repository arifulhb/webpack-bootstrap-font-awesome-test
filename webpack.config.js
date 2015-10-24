module.exports = {

	entry: './index.js',
	output: {
		path: 'public/assets/',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
        loaders: [

            {test: /\.css$/, loader: "style!css!" },
            { test: /\.less$/, loader: "style!css!less!" },
			
			//bootstrap
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      		{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      		{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      		{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      		
      		//font-awesome
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

      	

        ]
    },

} 