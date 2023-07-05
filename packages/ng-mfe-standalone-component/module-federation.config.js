module.exports = {
  name: 'ng-mfe-standalone-component',
  exposes: {
    './Module': 'packages/ng-mfe-standalone-component/src/loadMfe.ts',
  },
  library: { type: 'var', name: 'ng-mfe-standalone-component' },
};
