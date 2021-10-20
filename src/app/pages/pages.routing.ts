import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarritoComponent } from "@modulos/client/components/carrito/carrito.component";
import { ContactenosComponent } from "@modulos/client/components/contactenos/contactenos.component";
import { ProductosComponent } from "@modulos/client/components/productos/productos.component";
import { ServiciosComponent } from "@modulos/client/components/servicios/servicios.component";
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