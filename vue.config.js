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
  }
};
