// webpack.config.js
const path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js', // Entry file of your React Native app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ttf$/, // Handle ttf files
        loader: 'url-loader', // or use 'file-loader' if you prefer
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],
};
