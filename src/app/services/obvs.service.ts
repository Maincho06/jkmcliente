import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ObvsService extends BaseService {

    private readonly $spinner: BehaviorSubject<any> = new BehaviorSubject(false);

    constructor(
        private _spinner: NgxSpinnerService,
    ) {
        super();
    }

    //Spinner
    toogleSpinner() {
        this.$spinner.value ? this._spinner.hide() : this._spinner.show();
        this.$spinner.next(!this.$spinner.value)
    }
}
