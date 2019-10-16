import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-test-web',
  templateUrl: './test-web.component.html',
  styleUrls: ['./test-web.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestWebComponent {
  @Input() title: string;
  @Output() exit = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();
  @Output() expand = new EventEmitter<void>();


  constructor() { }

}
