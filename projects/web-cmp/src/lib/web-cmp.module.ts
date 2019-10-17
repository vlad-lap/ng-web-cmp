import {Injector, NgModule} from '@angular/core';
import { WebCmpComponent } from './web-cmp.component';
import {createCustomElement} from '@angular/elements';



@NgModule({
  declarations: [WebCmpComponent],
  imports: [],
  exports: [WebCmpComponent],
  entryComponents: [WebCmpComponent]
})
export class WebCmpModule {
  constructor(private injector: Injector) {
    const webCmp = createCustomElement(WebCmpComponent, { injector });
    customElements.define('test-web-cmp', webCmp);
  }
}
