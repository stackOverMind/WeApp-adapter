module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'weapp-adapter.js',
    path: './',
    libraryTarget: "var",
    library: 'wx'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
