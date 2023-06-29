const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
  remotes: [
    ['landing-page', 'http://localhost:4201/remoteEntry.js'],
    ['react-mfe-1', 'http://localhost:4202/remoteEntry.js'],
    ['react-mfe-2', 'http://localhost:4203/remoteEntry.js'],
    ['react-mfe-3', 'http://localhost:4204/remoteEntry.js'],
    ['angular-mfe-1', 'http://localhost:4205/remoteEntry.mjs'],
    ['angular-mfe-2', 'http://localhost:4206/remoteEntry.mjs'],
    ['angular-mfe-3', 'http://localhost:4207/remoteEntry.mjs'],
  ]
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
