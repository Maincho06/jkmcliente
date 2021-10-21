import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getState, PRODUCTOS_KEY, SERVICIOS_KEY } from '@utils/storage';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  productForm: FormArray = new FormArray([]);
  serviciosArr;

  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    const products = JSON.parse(getState(PRODUCTOS_KEY) || '[]');
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
    this.updateServices();
  }

  updateServices() {
    const servicios = JSON.parse(getState(SERVICIOS_KEY) || '[]');
    this.serviciosArr = servicios.map((x) => {
      x.selected = true;
      return x;
    });
  }

  get getProductos() {
    return this.productForm.controls
  }
}
