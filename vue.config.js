module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/' :
    '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/stylesheets/globals.sass";'
      }
    }
  },
  transpileDependencies: [
    'delay'
  ],
  devServer: {
    host: 'localhost',
    allowedHosts: ['localhost'],
    port: 8090
  },
  pluginOptions: {
    esCheck: {
      // [optional] uses sensible defaults if not set
      files: [
        // array of file patterns in glob style
        'js/*.js'
      ],

      // [optional] default: es5
      esVersion: 'es5'
    }
  },
};
