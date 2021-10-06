import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactenosComponent } from "@modulos/client/components/contactenos/contactenos.component";
import { ProductosComponent } from "@modulos/client/components/productos/productos.component";
import { ServiciosComponent } from "@modulos/client/components/servicios/servicios.component";
import { PagesComponent } from './pages.component';

const routes: Routes =
    [
        {
            path: 'home',
            component: PagesComponent,
            children: [
                { path: 'productos', component: ProductosComponent },
                { path: 'servicios', component: ServiciosComponent },
                { path: 'contactenos', component: ContactenosComponent },
            ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }