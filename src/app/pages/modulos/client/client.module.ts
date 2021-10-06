import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


const COMPONENTS = [
  HomeComponent,
  ProductosComponent,
  ServiciosComponent,
  ContactenosComponent
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
