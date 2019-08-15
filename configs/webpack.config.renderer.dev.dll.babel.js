/* eslint global-require: off, import/no-dynamic-require: off */

/**
 * Builds the DLL for development electron renderer process
 */

import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import { dependencies } from '../package.json';
import CheckNodeEnv from '../internals/scripts/CheckNodeEnv';
import baseConfig from './webpack.config.base';

CheckNodeEnv('development');

const dist = path.join(__dirname, '..', 'dll');

export default merge.smart(baseConfig, {
  context: path.join(__dirname, '..'),

  devtool: 'eval',

  entry: {
    renderer: Object.keys(dependencies || {})
  },

  externals: ['fsevents', 'crypto-browserify'],

  mode: 'development',

  /**
   * Use `module` from `webpack.config.renderer.dev.js`
   */
  module: require('./webpack.config.renderer.dev.babel').default.module,

  output: {
    filename: '[name].dev.dll.js',
    library: 'renderer',
    libraryTarget: 'var',
    path: dist
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dist, '[name].json')
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
      NODE_ENV: 'development'
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: path.join(__dirname, '..', 'app'),
        output: {
          path: path.join(__dirname, '..', 'dll')
        }
      }
    })
  ],

  target: 'electron-renderer'
});
