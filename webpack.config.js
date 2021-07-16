module.exports = {
    // ...
    entry: './src/index.js',
    resolve: {
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            buffer: require.resolve("buffer"),
            stream: require.resolve("stream-browserify")
        }
    },
    mode: 'development'
        // ...
};