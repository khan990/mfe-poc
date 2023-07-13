import 'zone.js';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';
import { PlatformRef } from '@angular/core';

declare const require: any;
const ngVersion = require('../../../package.json').dependencies[
  '@angular/core'
]; // perhaps just take the major version

const mount = () => {
  (window as any).plattform = (window as any).plattform || {};
  let platform: PlatformRef = (window as any).plattform[ngVersion];
  if (!platform) {
    platform = platformBrowser();
    (window as any).plattform[ngVersion] = platform;
  }

  platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));
};

export { mount };
