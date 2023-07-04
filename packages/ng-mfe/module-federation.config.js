module.exports = {
  name: 'ng-mfe',
  exposes: {
    './Module': 'packages/ng-mfe/src/loadMfe.ts',
  },
  library: {type: 'var', name: 'ng-mfe'},
};
