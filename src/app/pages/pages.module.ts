import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PagesRoutingModule } from './pages.routing';
import { NgxSpinnerModule } from 'ngx-spinner';

import { PagesComponent } from './pages.component';
import { ClientModule } from '@modulos/client.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    // PrimengModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    NgxSpinnerModule,
    ClientModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
