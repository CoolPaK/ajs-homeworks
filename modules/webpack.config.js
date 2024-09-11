const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                        use: [
                              {
                                loader: MiniCssExtractPlugin.loader,
                             },
                         'css-loader',
                       ],
            },
                  {
                        test: /\.html$ /,
                    use: ['html-loader']
      },
          {
                test: /\.js$ /,
            use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[id].css',
        })
    ]
}