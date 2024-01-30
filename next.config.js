module.exports = {
  reactStrictMode: true,

  // next.config.js
  webpack: (config, { isServer }) => {
    // For YAML files
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return config;
  },

  
}
