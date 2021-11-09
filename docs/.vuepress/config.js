const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Niuzx's blog",
  description: '小牛的技术博客，在人群中默默地做一个小透明',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
<<<<<<< HEAD
  themeConfig,
=======
   themeConfig,
>>>>>>> 524c68db1c1f45d7eeaa3f3620bca0db2271ffc8
}
