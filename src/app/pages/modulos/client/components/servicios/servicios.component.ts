import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@services/client.service';
import { getState, SERVICIOS_KEY, setState } from '@utils/storage';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  serviciosArr = [];

  constructor(private _clienteService: ClienteService) {}

  async ngOnInit() {
    try {
      const response = await this._clienteService.getServicios().toPromise();
      const selectedService = JSON.parse(getState(SERVICIOS_KEY) || '[]');
      this.serviciosArr = response.map((x) => {
        const isSelected = selectedService.find(
          (y) => x.idServicio === y.idServicio
        );
        x.selected = !!isSelected;
        return x;
      });
    } catch (err) {
      console.log(err);
    }
  }

  updateServices(serviceSelected) {
    this.serviciosArr = this.serviciosArr.map((x) => {
      const isSelected = serviceSelected.find(
        (y) => y.idServicio === x.idServicio
      );
      x.selected = !!isSelected;
      return x;
    });
  }
}
