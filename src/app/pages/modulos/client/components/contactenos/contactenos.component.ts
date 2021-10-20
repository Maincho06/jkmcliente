import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '@services/client.service';

@Component({
  selector   : 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls  : ['./contactenos.component.scss'],
})
export class ContactenosComponent implements OnInit {
  formularioGroup: FormGroup;

  constructor(
    private _clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.formularioGroup = new FormGroup({
      nombre: new FormControl("Cesar Farfan", [Validators.required]),
      emailAddress  : new FormControl("cesarfb999@gmail.com", [Validators.required]),
      telefono: new FormControl("955402764", [Validators.required]),
      empresa: new FormControl("Prueba TP", [Validators.required]),
      mensaje: new FormControl("Hola ", [Validators.required]),
    });
  }

  async enviarSolicitud() {
    try {
      const response = await this._clienteService.sendEmailCotizar(this.formularioGroup.value).toPromise()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
