import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { NOTIFICACION_URL, WEBCLIENTE_URL } from '@utils/url_constants';
import { IContactUs } from '@models/email.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  sendEmailSolicitud(contact: IContactUs): Observable<any> {
    return this.http.post<any>(`${NOTIFICACION_URL}/Contact`, contact, {
      headers: this.obtenerHeaders(),
    });
  }

  sendEmailCotizar(contact: IContactUs): Observable<any> {
    return this.http.post<any>(`${NOTIFICACION_URL}/Cotizacion`, contact, {
      headers: this.obtenerHeaders(),
    });
  }

  getCatalogo(): Observable<any> {
    return this.http.get<any>(`${WEBCLIENTE_URL}/Catalogo`, {
      headers: this.obtenerHeaders(),
    });
  }

  getServicios(): Observable<any> {
    return this.http.get<any>(`${WEBCLIENTE_URL}/Servicios`, {
      headers: this.obtenerHeaders(),
    });
  }
}
