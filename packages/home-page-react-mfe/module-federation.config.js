module.exports = {
  name: 'home-page-react-mfe',
  remotes: [
    'sign-in-page-react-mfe',
    'top-nav-bar-react-mfe',
    'side-nav-bar-react-mfe',
    'feature-1-react-mfe',
    'feature-2-react-mfe',
    'feature-3-angular-mfe',
    'feature-4-angular-mfe',
  ],
  exposes: {
    './Module': './src/bootstrapMfe.tsx',
  },
};
