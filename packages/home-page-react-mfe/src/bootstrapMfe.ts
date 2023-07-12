import r2wc from '@r2wc/react-to-web-component';
import App from './app/app';

const mount = () => {
  if (customElements.get('home-page-react-mfe-wc-el')) {
    return;
  }

  const homePageReactMfe = r2wc(App);
  customElements.define('home-page-react-mfe-wc-el', homePageReactMfe);
};

export { mount };
