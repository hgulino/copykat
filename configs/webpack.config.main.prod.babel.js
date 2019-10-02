/**
 * Webpack config for production electron main process
 */

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.config.base';
import CheckNodeEnv from '../internals/scripts/CheckNodeEnv';

CheckNodeEnv('production');

export default merge.smart(baseConfig, {
  devtool: 'source-map',

  entry: './app/main.dev',

  mode: 'production',

  node: {
    __dirname: false,
    __filename: false
  },

  optimization: {
    minimizer: process.env.E2E_BUILD
      ? []
      : [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          })
        ]
  },

  output: {
    filename: './app/main.prod.js',
    path: path.join(__dirname, '..')
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode:
        process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true'
    }),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.EnvironmentPlugin({
      DEBUG_PROD: false,
      NODE_ENV: 'production',
      START_MINIMIZED: false
    })
  ],

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  target: 'electron-main'
});
