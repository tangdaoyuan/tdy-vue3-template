
const Mock = require('mockjs');

const ping = {
    'GET /api/ping': Mock.mock({
        'code|1': [-1, 0, 1],
        msg: 'pong',
    })
};

const proxy = {
    ...ping,
}

module.exports = proxy;
