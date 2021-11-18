import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarritoComponent } from "@modulos/components/carrito/carrito.component";
import { ContactenosComponent } from "@modulos/components/contactenos/contactenos.component";
import { ProductosComponent } from "@modulos/components/productos/productos.component";
import { ServiciosComponent } from "@modulos/components/servicios/servicios.component";
import { PagesComponent } from './pages.component';

const routes: Routes =
    [
        {
            path: '',
            component: PagesComponent,
            children: [
                { path: 'productos', component: ProductosComponent },
                { path: 'servicios', component: ServiciosComponent },
                { path: 'contactenos', component: ContactenosComponent },
                { path: 'carrito', component: CarritoComponent },
            ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }