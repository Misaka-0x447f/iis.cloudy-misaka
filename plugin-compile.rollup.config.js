const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = {
  input: './node_modules/remark-breaks/index.js',
  output: {
    file: './compiledModules/remark-breaks.js',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
}
