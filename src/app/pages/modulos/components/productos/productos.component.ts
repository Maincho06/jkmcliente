import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '@services/client.service';
import { ObvsService } from '@services/obvs.service';
import { getState, PRODUCTOS_KEY, setState } from '@utils/storage';
import { toast } from '@utils/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productForm: FormArray = new FormArray([]);

  constructor(
    private _clienteService: ClienteService,
    private _obvsService: ObvsService,
    private _messageService: MessageService
  ) {}

  async ngOnInit() {
    try {
      this._obvsService.toogleSpinner();
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
    } finally {
      this._obvsService.toogleSpinner();
    }
  }

  addCart(index: number) {
    const productos = JSON.parse(getState(PRODUCTOS_KEY) || '[]');
    const product = this.productForm.get([index]).value;

    if (!Number.isInteger(product.cantidad))
      return toast({
        title: 'Carrito',
        message: 'Ingrese un numero valido',
        type: 'warn',
        messageService: this._messageService,
      });
    if (product.cantidad <= 0) return;
    if (product.cantidad > product.stock)
      return toast({
        title: 'Carrito',
        message: 'Ingrese una cantidad menor o igual al stock disponible: ' + product.stock,
        type: 'warn',
        messageService: this._messageService,
      });

    const newProducts =
      productos?.filter((x) => x.idCatalogo !== product.idCatalogo) || [];

    const orderProducts = [...newProducts, product].sort(function (a, b) {
      return a.idCatalogo - b.idCatalogo;
    });

    setState(PRODUCTOS_KEY, orderProducts);

    toast({
      title: 'Carrito',
      message: 'Se agregó el producto',
      type: 'success',
      messageService: this._messageService,
    });
  }

  changeValue(add: number, index: number) {
    const product = this.productForm.get([index]);
    const nextValue = Number(product.get('cantidad').value) + add;
    if (nextValue < 0 || nextValue > product.get('stock').value) return;
    else {
      product.get('cantidad').setValue(nextValue);
    }
  }
}
