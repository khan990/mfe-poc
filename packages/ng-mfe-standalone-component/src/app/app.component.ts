import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>This is standalone NG Component.</h1>',
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {}
