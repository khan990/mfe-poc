import r2wc from '@r2wc/react-to-web-component';
import App from './app/app';

const mount = () => {
  if (customElements.get('side-nav-bar-react-mfe-wc-el')) {
    return;
  }

  const sideNavBarReactMfe = r2wc(App, {
    props: {
      authServiceName: 'string',
    },
  });
  customElements.define('side-nav-bar-react-mfe-wc-el', sideNavBarReactMfe);
};

export { mount };
