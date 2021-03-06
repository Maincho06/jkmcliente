import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { getState } from '@utils/storage';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  protected obtenerHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return headers;
  }

  protected enableCores() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}
