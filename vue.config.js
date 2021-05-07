// const path = require('path');

module.exports = {
  // 写别名的第一种方法
//   chainWebpack: (config) => {
//     config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
//   },

  // 第二种方法
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
