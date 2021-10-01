import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS =  [
  
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
    MODULES
  ]
})
export class SharedModule { }
