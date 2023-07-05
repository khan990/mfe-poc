import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule.forRoot(
      [

      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
