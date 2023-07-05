const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
  remotes: [
    ['ng-mfe-standalone-component', 'http://localhost:4201/remoteEntry.mjs'],
    ['ng-mfe-module', 'http://localhost:4202/remoteEntry.mjs'],
  ]
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
