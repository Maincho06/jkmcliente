import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '@services/client.service';
import { getState, PRODUCTOS_KEY, setState } from '@utils/storage';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productForm: FormArray = new FormArray([]);

  constructor(private _clienteService: ClienteService) {}

  async ngOnInit() {
    try {
      const response = await this._clienteService.getCatalogo().toPromise();
      const selectedProducts = JSON.parse(getState(PRODUCTOS_KEY) || '[]');

      response.map((x) => {
        const exist = selectedProducts.find(
          (y) => x.idCatalogo === y.idCatalogo
        );
        let cantidad = exist ? exist.cantidad : 0;
        this.productForm.push(
          new FormGroup({
            idCatalogo: new FormControl(x.idCatalogo),
            codigo: new FormControl(x.codigo),
            imagen: new FormControl(x.imagen),
            nombre: new FormControl(x.nombre),
            precio: new FormControl(x.precio),
            stock: new FormControl(x.stock),
            cantidad: new FormControl(cantidad),
          })
        );
        return x;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
