import webpack from 'webpack'
import Config from 'webpack-config'

export default new Config().extend('./config/webpack.base.config.js').merge({
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: '../client',
    port: 4001
  }
})