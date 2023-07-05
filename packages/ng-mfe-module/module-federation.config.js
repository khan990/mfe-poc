const deps = require('../../package.json').dependencies;

module.exports = {
  name: 'ng-mfe-module',
  exposes: {
    './Module': 'packages/ng-mfe-module/src/loadMfe.ts',
  },
  additionalShared: [
    {
      libraryName: '@angular/router',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/router'],
      }
    },
    {
      libraryName: 'zone.js',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['zone.js'],
      }
    },
    {
      libraryName: '@angular/platform-browser',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/platform-browser'],
      }
    },
    {
      libraryName: '@angular/core',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/core'],
      }
    },
    {
      libraryName: '@angular/common',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/common'],
      }
    },
    {
      libraryName: '@angular/common/http',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/common/http'],
      }
    },
    {
      libraryName: '@angular/platform-browser-dynamic',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        eager: true,
        requiredVersion: deps['@angular/platform-browser-dynamic'],
      }
    },
  ]
};
