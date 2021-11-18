import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: 'service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent {
  @Input() control: any;
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  selectService() {
    this.emitter.emit(this.control);
  }
}
