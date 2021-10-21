import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getState, SERVICIOS_KEY, setState } from '@utils/storage';

@Component({
  selector: 'app-servicio-card',
  templateUrl: 'card-servicio.component.html',
  styleUrls: ['./card-servicio.component.scss'],
})
export class ServicioCardComponent {
  @Input() servicio;
  @Output() emitChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addService(item) {
    const selectedService = JSON.parse(getState(SERVICIOS_KEY) || '[]');
    const exist = selectedService.find((x) => x.idServicio === item.idServicio);
    if (!exist) {
      const newServicios = [...selectedService, item];
      setState(SERVICIOS_KEY, newServicios);
      this.emitChange.emit(newServicios);
    }
  }

  removeService(idServicio: number) {
    const selectedService = JSON.parse(getState(SERVICIOS_KEY) || '[]');
    const exist = selectedService.find((x) => x.idServicio === idServicio);
    if (exist) {
      const newServicios = selectedService.filter((x) => {
        if (x.idServicio !== idServicio) return x;
      });
      setState(SERVICIOS_KEY, newServicios);
      this.emitChange.emit(newServicios);
    }
  }
}
