import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TestWebComponent } from './test-web/test-web.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TestWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [TestWebComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webCmp = createCustomElement(TestWebComponent, { injector: this.injector });
    customElements.define('test-web-cmp', webCmp);
  }
}
