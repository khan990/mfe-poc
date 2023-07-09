import r2wc from '@r2wc/react-to-web-component';
import App from './app/app';

const mount = () => {
  if (customElements.get('feature-1-react-mfe-wc-el')) {
    return;
  }

  const feature4ReactMfe = r2wc(App, {
    props: {
      authServiceName: 'string',
    },
  });
  customElements.define('feature-1-react-mfe-wc-el', feature4ReactMfe);
};

export { mount };
