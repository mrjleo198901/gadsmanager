import { Component, OnInit } from '@angular/core';
import { ParroquiaService } from '../../services/parroquia.service';
import { MessageGrowlService } from '../../services/message-growl.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private parroquia: ParroquiaService, private messages: MessageGrowlService) { }

  ngOnInit() {
    this.parroquia.getAll().subscribe(data => {
      this.lstParroquias = data;
    }, err => {
      console.log(err);
    });
  }

  nombre;
  lstParroquias: any[] = [];
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

  addParroquia() {
    this.parroquia.register(this.objParroquia).subscribe(data => {
      this.lstParroquias.push(this.objParroquia);
      this.messages.notify('success', 'Éxito', 'Ingreso Exitoso!');
      location.reload();
    }, err => {
      console.log(err);
    });
  }

}
