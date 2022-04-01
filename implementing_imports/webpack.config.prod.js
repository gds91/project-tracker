const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/app.ts",
	mode: "production",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		// publicPath: "/dist/", <- not needed for production version.
		// we want to run the webpack script and have it generate the bundle.js file in the dist folder
	},
	//devtool: "inline-source-map" <- not needed for the production version
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./"),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
