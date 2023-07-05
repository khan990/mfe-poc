const deps = require('../../package.json').dependencies;

module.exports = {
  name: 'react-shell',
  remotes: ['ng-mfe-standalone-component', 'ng-mfe-module'],
  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['react'],
      }
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['react-dom'],
      }
    },
    {
      libraryName: 'react-router-dom',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['react-router-dom'],
      }
    },
    {
      libraryName: '@angular/router',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/router'],
      }
    },
    {
      libraryName: '@angular/platform-browser',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/platform-browser'],
      }
    },
    {
      libraryName: '@angular/core',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/core'],
      }
    },
    {
      libraryName: '@angular/common',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/common'],
      }
    },
    {
      libraryName: '@angular/common/http',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/common/http'],
      }
    },
    {
      libraryName: '@angular/platform-browser-dynamic',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: deps['@angular/platform-browser-dynamic'],
      }
    },
  ]
};
