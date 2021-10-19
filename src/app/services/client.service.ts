import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { NOTIFICACION_URL } from '@utils/url_constants';
import { IContactUs } from '@models/email.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  sendEmailCotizar(contact: IContactUs): Observable<any> {
    return this.http.post<any>(`${NOTIFICACION_URL}/Contact`, contact, {
      headers: this.obtenerHeaders(),
    });
  }
}
