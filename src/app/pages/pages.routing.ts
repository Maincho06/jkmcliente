import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';

const routes: Routes =
    [
        {
            path: 'home',
            component: PagesComponent,
            // children: [
            //     { path: '', component: DashboardComponent }
            // ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }