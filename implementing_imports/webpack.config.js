const path = require("path");

module.exports = {
	entry: "./src/app.ts",
	mode: "development", // sets webpack to development mode and prevents warning from appearing
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
	},
	devtool: "source-map",
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
};
