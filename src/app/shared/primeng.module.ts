import { NgModule } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';


const PRIMENG = [
  SidebarModule,
  ButtonModule,
  TabViewModule,
  MenubarModule,
];

@NgModule({
  imports: [
    PRIMENG,
  ],
  exports: [
    PRIMENG
  ]
})
export class PrimengModule { }
