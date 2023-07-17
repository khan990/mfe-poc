import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { RemoteEntryWidget1Component } from './widget-1.component';
import { RemoteEntryWidget2Component } from './widget-2.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        component: RemoteEntryWidget1Component,
      },
      {
        path: 'feature-4-angular-widget-1',
        component: RemoteEntryWidget1Component,
      },
      {
        path: 'feature-4-angular-widget-2',
        component: RemoteEntryWidget2Component,
      },
    ],
  },
];
