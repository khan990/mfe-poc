import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const mountStandalone = () => {
  bootstrapApplication(AppComponent);
};

export { mountStandalone };
