/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies } from '../package.json';

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    libraryTarget: 'commonjs2',
    // https://github.com/webpack/webpack/issues/1114
    path: path.join(__dirname, '..', 'app')
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
