const {
  resolve
} = require('path');
const Root = resolve(__dirname, '..');
const build = resolve(Root, './build');
const nodeModules = resolve(Root, 'node_modules');
const src = resolve(Root, './src')
const app = resolve(Root, './src/index.js');
const style = resolve(Root, './src/style/main.scss');


module.exports = {
  Root,
  build,
  nodeModules,
  app,
  style,
  src
}
