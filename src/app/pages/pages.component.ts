import { Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { filter } from 'rxjs/operators';
import * as $ from "jquery";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    ngOnInit(): void {
        
    }

 
}
