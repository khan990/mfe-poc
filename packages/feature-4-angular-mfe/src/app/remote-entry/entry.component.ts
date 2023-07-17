import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-4-angular-mfe-entry',
  template: `
    <h1>Feature 4 Angular MFE</h1>

    <div style="display: flex; justify-content: space-evenly; align-items: center;">
      <a routerLink="/feature-2-and-4-combo/feature-4-angular-widget-1">Widget 1</a>
      <a routerLink="/feature-2-and-4-combo/feature-4-angular-widget-2">Widget 2</a>
    </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {}
