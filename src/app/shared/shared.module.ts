import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionsCardComponent } from './actions-card/actions-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NumberDirective } from '@directives/onlyNumbers.directive';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const COMPONENTS =  [
  ActionsCardComponent,
  ProductDetailComponent,
  ServiceDetailComponent,
  NumberDirective
]


const MODULES = [
  CommonModule,
  RouterModule,
  PrimengModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    MODULES
  ],
  exports: [
    MODULES,
    COMPONENTS
  ]
})
export class SharedModule { }
