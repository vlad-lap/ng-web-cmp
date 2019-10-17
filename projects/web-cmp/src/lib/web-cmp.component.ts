import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-web-cmp',
  templateUrl: './web-cmp.component.html',
  styleUrls: ['./web-cmp.component.scss'],
})
export class WebCmpComponent {
  @Input() title: string;
  @Output() exit = new EventEmitter<void>();
  @Output() collapse = new EventEmitter<void>();
  @Output() expand = new EventEmitter<void>();
}
