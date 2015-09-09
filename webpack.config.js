var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

var PROD_ENV = (process.env.ENV === "production");

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
            './src/js/app.js'
        ]
    },
    devtool: 'sourcemap',
    output: {
        path: __dirname + '/dist/',
        filename: PROD_ENV ? "bundle.min.js" : "bundle.js",
        sourceMapFilename: "bundle.js.map"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.html$/,
                loaders: [
                    'file?name=[name].html'
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!sass")
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: PROD_ENV ? prodPlugins() : devPlugins()
};

function prodPlugins() {
    return devPlugins().concat([
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]);
}

function devPlugins() {
    return [
        new ExtractTextPlugin("css/app.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ];
}