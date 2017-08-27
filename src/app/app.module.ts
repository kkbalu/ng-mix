import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { Ng1ComponentFacade } from './ng1-component-facade.directive';
import {HttpClientModule} from "@angular/common/http";
import {UpgradeModule} from "@angular/upgrade/static";

@NgModule({
  declarations: [
    AppComponent,
    Ng1ComponentFacade
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  ngDoBootstrap(): void {}
}
