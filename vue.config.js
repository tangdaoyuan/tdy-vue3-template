const path = require("path");
const apiMocker = require('mocker-api');
const mockerPriority = process.env.VUE_APP_MOCKER_PRIORITY || 'proxy';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    devServer: {
        hot: true,
        open: true,
        disableHostCheck: true,  // 如果使用 host: '0.0.0.0' 开启
        host: 'localhost',
        port: 8080,
        https: false,
        before(app) {
            apiMocker(app, path.resolve('./mock/index.js'), {
                priority: mockerPriority,
                pathRewrite: {
                    '^/api': '/api'
                },
                proxy: {
                    '/api/(.*)': process.env.VUE_APP_BASE_API,
                },
                httpProxy: {
                    options: {
                        headers: {
                            referer: process.env.VUE_APP_BASE_API,
                        }
                    }
                },
                changeHost: true,
            })
        },
    },
    configureWebpack: {
        devtool: isProduction ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
        resolve: {
            alias: {
                '@api': '@/http/api'
            }
        }
    }
};