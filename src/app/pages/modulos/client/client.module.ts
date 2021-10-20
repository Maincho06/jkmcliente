import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { SharedModule } from 'app/shared/shared.module';

const COMPONENTS = [
  HomeComponent,
  ProductosComponent,
  ServiciosComponent,
  ContactenosComponent,
  CarritoComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ 
    COMPONENTS
  ]
})
export class ClientModule { }
