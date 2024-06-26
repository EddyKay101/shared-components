const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.module\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                'sass-loader',
                {
                    loader: 'css-modules-typescript-loader',
                    options: {
                        mode: process.env.CI ? 'verify' : 'emit',
                    },
                },
            ],
        }, ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    },
};