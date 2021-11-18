import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '@services/client.service';
import { ObvsService } from '@services/obvs.service';
import {
  clearState,
  getState,
  PRODUCTOS_KEY,
  SERVICIOS_KEY,
  setState,
} from '@utils/storage';
import { toast } from '@utils/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  productForm: FormArray = new FormArray([]);
  contactoForm: FormGroup;
  serviciosArr;

  responsiveOptions;

  constructor(
    private _clienteService: ClienteService,
    private _messageService: MessageService,
    private _obvsService: ObvsService,
    private _router: Router
  ) {
    this.updateProducts();
    this.updateServices();

    this.contactoForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      emailAddress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      telefono: new FormControl(null, [Validators.required]),
      empresa: new FormControl(null, [Validators.required]),
      mensaje: new FormControl(null),
    });
  }

  updateServices() {
    this.serviciosArr = JSON.parse(getState(SERVICIOS_KEY) || '[]');
  }

  reloadService(serviceSelected) {
    const cartService = JSON.parse(getState(SERVICIOS_KEY) || '[]');
    const idServicio = serviceSelected.idServicio;
    const isSelected = cartService.find((x) => x.idServicio === idServicio);

    this.serviciosArr = this.serviciosArr.map((x) => {
      if (x.idServicio === idServicio) x.selected = !isSelected;
      return x;
    });

    const addedServices = this.serviciosArr.filter((x) => x.selected);
    setState(SERVICIOS_KEY, addedServices);
    this.updateServices();
  }

  updateProducts() {
    const products = JSON.parse(getState(PRODUCTOS_KEY) || '[]');
    this.productForm.clear();
    products.forEach((x) => {
      this.productForm.push(
        new FormGroup({
          idCatalogo: new FormControl(x.idCatalogo),
          codigo: new FormControl(x.codigo),
          imagen: new FormControl(x.imagen),
          nombre: new FormControl(x.nombre),
          precio: new FormControl(x.precio),
          stock: new FormControl(x.stock),
          cantidad: new FormControl(x.cantidad),
        })
      );
      return x;
    });
  }

  async enviarCotizacion() {
    const productos = JSON.parse(getState(PRODUCTOS_KEY) || '[]');
    const servicios = JSON.parse(getState(SERVICIOS_KEY) || '[]');

    const body = {
      ...this.contactoForm.value,
      productos,
      servicios,
    };

    try {
      this._obvsService.toogleSpinner();
      console.log(body)
      await this._clienteService.sendEmailCotizar(body).toPromise();
      toast({
        title: 'Correo enviado',
        message: 'El correo ha sido enviado con exito',
        type: 'success',
        messageService: this._messageService,
      });
      clearState();
      this._router.navigate(['/productos']);
    } catch (err) {
      console.log(err);
    } finally {
      this._obvsService.toogleSpinner();
    }
  }

  get getProductos() {
    return this.productForm.controls;
  }
}
