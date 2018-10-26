const path = require('path');
const client_src = path.join(__dirname, '/client/src');
const client_dist = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${client_src}/index.jsx`,
  module : {
    rules : [
      {
        test: /\.(js||jsx)$/,
        include: client_src,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: client_dist
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }
};