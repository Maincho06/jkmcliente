import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-actions-card',
  templateUrl: 'actions-card.component.html',
  styleUrls: ['./actions-card.component.scss'],
})
export class ActionsCardComponent implements OnInit {
  @Input() icon: string = 'pi pi-shopping-cart';
  @Input() cantidadControl: FormControl;
  @Output() emitChange: EventEmitter<number> = new EventEmitter();
  @Output() saveChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeValue(value: number) {
    this.emitChange.emit(value);
  }

  updateCart() {
    this.saveChange.emit(true);
  }
}
