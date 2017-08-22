import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng1ComponentFacadeDirective } from './ng1-component-facade.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ng1ComponentFacadeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
