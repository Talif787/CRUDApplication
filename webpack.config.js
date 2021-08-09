const dotenv = require('dotenv')
dotenv.config({ path: __dirname + '/.env' });
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env.PORT': JSON.stringify(process.env.PORT),
          'process.env.MONGO_URI': JSON.stringify(process.env.MONGO_URI),
          'process.env.baseURL': JSON.stringify(process.env.baseURL)
        })
    ],
    }