module.exports = {
  entry: './app',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  mode: 'development',

  watch: true,

  devtool: 'source-map',
};
