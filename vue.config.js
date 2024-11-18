const config = require('@rancher/shell/vue.config'); // eslint-disable-line @typescript-eslint/no-var-requires

const baseConfig = config(__dirname, {
  excludes: [],
});

// add custom loader
if (typeof baseConfig.configureWebpack === 'function') {
  const configureWebpack = baseConfig.configureWebpack;

  baseConfig.configureWebpack = (config) => {
    configureWebpack(config);

    config.module.rules.push({
      test: /\.jsx$/i,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['veaury/babel/ReactPreset'] }
    });
  };
}

module.exports = baseConfig;
