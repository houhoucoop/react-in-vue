const config = require('@rancher/shell/vue.config'); // eslint-disable-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

const baseConfig = config(__dirname, {
  excludes: [],
  // excludes: ['fleet', 'example']
});
console.log("🚀🚀🚀 ~ baseConfig:", baseConfig)

if (typeof baseConfig.configureWebpack === 'function') {
  const configureWebpack = baseConfig.configureWebpack;

  baseConfig.configureWebpack = (webpackConfig) => {
    configureWebpack(webpackConfig);

    webpackConfig.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: 'my-app-2',
        remotes: {
          longhornUI: 'longhornUI@http://localhost:8080/remoteEntry.js'
        }
      }),
    )
  };
}

baseConfig.devServer = {
  ...baseConfig.devServer,
  proxy: {
    '/myProductName/c/_/v1': {
      target: 'http://localhost:8080', // React API base URL
      changeOrigin: true,
      pathRewrite: {
        '^/myProductName/c/_/v1': '/v1', // Rewriting the path
      },
    },
  },
}

module.exports = baseConfig