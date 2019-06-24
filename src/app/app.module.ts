import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrustHtmlModule } from '../../projects/trust-html/src/lib/trust-html.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrustHtmlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
