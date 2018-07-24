import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  objUser = {
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    estado: 1,
    tipoUser: '5b525c312bd8b21ed49852b0'/*Id de usuario tipo administrador*/
  }
  password: any;

  constructor() { }

  ngOnInit() {
  }

}
