import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './components/productos/productos.component';


const COMPONENTS = [
  HomeComponent,
  ProductosComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    COMPONENTS
  ]
})
export class ClientModule { }
