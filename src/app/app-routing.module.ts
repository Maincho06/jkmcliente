import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/modulos/client/home/home.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  { path: '', redirectTo: '/home/productos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
