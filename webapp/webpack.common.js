const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
  context: path.resolve(__dirname, "."),
  // set the entry point of the application
  // can use multiple entry
  entry: {
    jitsi: "./src/main/webapp/vue-apps/Jitsi/main.js",
    callButton: "./src/main/webapp/vue-apps/CallButton/main.js",
  },
  output: {
    publicPath: '',
    filename: "js/[name].bundle.js",
    libraryTarget: "amd",
  },
  plugins: [
    new ESLintPlugin({
      files: [
        './src/main/webapp/vue-apps/*.js',
        './src/main/webapp/vue-apps/*.vue',
        './src/main/webapp/vue-apps/**/*.js',
        './src/main/webapp/vue-apps/**/*.vue',
      ],
    }),
    new VueLoaderPlugin(),
    // we use MiniCssExtractPlugin to extract the css code on a css file
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.less$/i,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          // compiles Less to CSS
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          "vue-svg-loader",
        ],
      },
    ],
  },
  externals: {
    vue: "Vue",
    vuetify: "Vuetify",
  },
};

module.exports = config;
