const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            title: "My Awesome int application",
            favicon: "./src/assets/images/svg_1.svg",
            myPageHeader: "Hello World",
            template: "./src/index.html",
            filename: "./index.html", //relative to root of the application
        }),
        new MiniCSSExtractPlugin({
            filename: "styles.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: "fonts",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,

                loader: 'file-loader',
                options: {
                    outputPath: "img",
                },
            },
        ],

    },
};
