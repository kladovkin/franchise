module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/' :
    '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "sass:math"
          @import "@/stylesheets/globals.sass"
        `
      }
    }
  },
  devServer: {
    host: 'localhost',
    allowedHosts: ['localhost'],
    port: 8090,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  transpileDependencies: [
    'vue',
    '@vue',
    'vue-router',
    'query-string',
    'strict-uri-encode'
  ],
  // uncomment to debug es-check errors
  // chainWebpack: config => {
  //   config.optimization.minimize(false);
  // },
  productionSourceMap: false
};
