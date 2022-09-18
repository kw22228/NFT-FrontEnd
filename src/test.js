module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config, env) {
        const overridedConfig = {
            ...config,
            resolve: {
                ...config.resolve,
                fallback: {
                    ...config.resolve.fallback,
                    fs: false,
                    net: false,
                    stream: require.resolve('stream-browserify'),
                    crypto: require.resolve('crypto-browserify'),
                    http: require.resolve('stream-http'),
                    https: require.resolve('https-browserify'),
                    os: require.resolve('os-browserify/browser'),
                    url: require.resolve('url'),
                    buffer: require.resolve('buffer/'),
                },
            },
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /\.(mp4|ogg)$/,
                        // exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]?[hash]',
                            },
                        },
                    },
                    {
                        test: /\.(mp4|ogg)$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[ext]?[hash]',
                            },
                        },
                    },
                ],
            },
        };
        return overridedConfig;
    },
};

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config, env) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url'),
            buffer: require.resolve('buffer/'),
        };

        config.module = {
            rules: [
                {
                    test: /\.(mp4|ogg)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/videos/[name].[ext]?[hash]',
                        },
                    },
                },
            ],
        };

        return config;
    },
};
