// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fsj = require('fs-jetpack')

module.exports = function (api) {
  api.loadSource(async (store) => {
    store.addMetadata('baseURL', 'https://iis.misaka.org')
  })

  api.chainWebpack((config) => {
    fsj.write('webpack.config.js', `// this file is auto generated. do not modify. \nmodule.exports = ${JSON.stringify(config.toConfig())}`)
    return config
  })
}
