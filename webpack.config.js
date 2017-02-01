module.exports = {
    devtool: 'source-map',
    entry: './src/Search.js',
    output: {
        path: __dirname,
        filename: 'Search.js'
    },
    module: {
        loaders: [
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
