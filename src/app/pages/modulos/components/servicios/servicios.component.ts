import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@services/client.service';
import { ObvsService } from '@services/obvs.service';
import { getState, SERVICIOS_KEY, setState } from '@utils/storage';
import { toast } from '@utils/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  serviciosArr = [];

  constructor(
    private _clienteService: ClienteService,
    private _obvsService: ObvsService,
    private _messageService: MessageService
  ) {}

  async ngOnInit() {
    try {
      this._obvsService.toogleSpinner();
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
    } finally {
      this._obvsService.toogleSpinner();
    }
  }

  updateServices(serviceSelected) {
    const cartService = JSON.parse(getState(SERVICIOS_KEY) || '[]');
    const idServicio = serviceSelected.idServicio;
    const isSelected = cartService.find((x) => x.idServicio === idServicio);

    this.serviciosArr = this.serviciosArr.map((x) => {
      if (x.idServicio === idServicio) x.selected = !isSelected;
      return x;
    });

    const addedServices = this.serviciosArr.filter((x) => x.selected);
    setState(SERVICIOS_KEY, addedServices);
    toast({
      title: 'Carrito',
      message: !isSelected ? 'Se agregó el servicio' : 'Se elimino el servico',
      type: 'success',
      messageService: this._messageService,
    });
  }
}
