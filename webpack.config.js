const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            { 
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};