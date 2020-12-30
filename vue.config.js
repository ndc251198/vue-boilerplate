const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  css: {
    sourceMap: !IS_PRODUCTION,
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"`
      },
      scss: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
}
