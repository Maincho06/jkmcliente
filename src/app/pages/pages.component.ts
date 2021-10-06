import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    items: MenuItem[];
    ngOnInit(): void {
        this.items = [
          {
            label: 'Producto',
            routerLink: ['productos']
          },
          {
            label: 'Servicio',
            routerLink: ['servicios']
          },
          {
            label: 'Contactenos',
            routerLink: ['contactenos']
          },
        ]
    }

 
}
