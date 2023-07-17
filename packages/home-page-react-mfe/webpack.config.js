const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
  remotes: [
    ['sign-in-page-react-mfe', 'http://localhost:4202/remoteEntry.js'],
    ['top-nav-bar-react-mfe', 'http://localhost:4203/remoteEntry.js'],
    ['side-nav-bar-react-mfe', 'http://localhost:4204/remoteEntry.js'],
    ['feature-1-react-mfe', 'http://localhost:4205/remoteEntry.js'],
    ['feature-2-react-mfe', 'http://localhost:4206/remoteEntry.js'],
    ['feature-3-angular-mfe', 'http://localhost:4208/remoteEntry.mjs'],
    ['feature-4-angular-mfe', 'http://localhost:4209/remoteEntry.mjs'],
  ]
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
);
