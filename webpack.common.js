const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const {
  InjectManifest
} = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'public/assets/'
          }
        }]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/public/'),
        globOptions: {
          ignore: ['**/assets/**'],
        },
      }]
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new WebpackPwaManifest({
      name: 'FoodiestApp',
      short_name: 'FoodApp',
      description: 'Free Restaurants catalogue app for you',
      start_url: 'src/templates/index.html',
      background_color: '#ef6c00',
      theme_color: '#ef6c00',
      display: 'standalone',
      orientation: 'portrait',
      publicPath: '../',
      filename: 'public/manifest.json',
      includeDirectory: true,
      ios: true,
      icons: [{
          src: path.resolve(__dirname, 'src/public/icons/icon.png'),
          sizes: [72, 96, 128, 192, 256, 384, 512],
          destination: 'public/icons',
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/icon.png'),
          size: 512,
          destination: 'public/icons',
          ios: true,
        },
      ],
    }),
  ],
};