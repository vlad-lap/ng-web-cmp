import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-test-web',
  templateUrl: './test-web.component.html',
  styleUrls: ['./test-web.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestWebComponent {
  @Input() title: string;

  constructor() { }

}
