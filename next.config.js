const nextTranslate = require('next-translate');

module.exports = {
  images: {
    domains: [],
  },
  env: {},
  ...nextTranslate(),
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Accept,Content-Type, Date',
          },
        ],
      },
    ];
  },
};
