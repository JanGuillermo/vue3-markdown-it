module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/packs/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue3-markdown-it',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.md$/,
          loader: 'raw-loader'
        }
      ]
    }
  }
};
