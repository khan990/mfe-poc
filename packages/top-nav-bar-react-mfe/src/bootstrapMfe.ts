import r2wc from '@r2wc/react-to-web-component';
import App from './app/app';

const mount = () => {
  if (customElements.get('top-nav-bar-react-mfe-wc-el')) {
    return;
  }

  const topNavBarReactMfe = r2wc(App);
  customElements.define('top-nav-bar-react-mfe-wc-el', topNavBarReactMfe);
};

export { mount };
