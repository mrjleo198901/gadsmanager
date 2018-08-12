import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parroquia-design',
  templateUrl: './parroquia-design.component.html',
  styleUrls: ['./parroquia-design.component.css']
})
export class ParroquiaDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  objParroquia = {
    nombre: '',
    telefono: '',
    correo: '',
    latitud: 0,
    longitud: 0,
    autoridad: [],
    barrio: [],
    actividadEco: [],
    gastronomia: [],
    turismo: [],
    historia: [],
    galeria: []
  }

  objAutoridad = {
    cedula: '',
    nombre: '',
    cargo: '',
    fechaFiliacion: '',
    telefono: '',
    correo: '',
    profesion: ''
  }


}
