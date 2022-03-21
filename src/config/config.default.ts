import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1647848505868_9391',
  koa: {
    port: 7001,
  },
  mongoose: {
    client: {
      uri: 'mongodb://localhost:27017/test',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  },
} as MidwayConfig;
