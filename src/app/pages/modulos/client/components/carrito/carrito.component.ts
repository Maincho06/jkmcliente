import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-carrito',
  templateUrl: 'carrito.component.html',
  styleUrls  : ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  products;

  responsiveOptions;

  constructor() {
    this.products = new Array(3).fill(arrProd);
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
  }

  ngOnInit() {}
}

const arrProd = {
  image:
    'https://primefaces.org/primeng/showcase/assets/showcase/images/demo/product/blue-band.jpg',
  price: 15,
  name: 'Cable aisalador negro',
};
