const path = require('path');
const ip = require('ip');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const directoryPath = path.resolve('public');
const handleDir = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject('Unable to scan directory: ' + err);
      }
      resolve(files);
    });
  });
};

module.exports = async (env, agrv) => {
  const ipAddress = ip.address();
  console.log('ipv4: ' + ipAddress);
  const dirs = await handleDir();
  const copyPluginPatterns = dirs
    .filter((dir) => dir !== 'index.html')
    .map((dir) => {
      return {
        from: dir,
        to: '',
        context: path.resolve('public'),
      };
    });
  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: copyPluginPatterns,
    }),
    new webpack.ProgressPlugin(),
  ];

  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.less$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve(),
        '/': path.resolve('public'),
      },
    },
    output: {
      path: path.resolve('build'),
      publicPath: '/',
      filename: 'static/js/main.js',
      assetModuleFilename: 'static/assets/[hash][ext]',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false,
      },
    },
    devtool: 'source-map',
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      host: '0.0.0.0', //your ip address,
      public: 'localhost:3000',
      disableHostCheck: true,
      watchContentBase: true,
      historyApiFallback: true,
      open: true,
    },
    plugins: basePlugins,
    performance: {
      maxEntrypointSize: 800000,
    },
  };
};
