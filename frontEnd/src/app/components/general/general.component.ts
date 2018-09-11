import { Component, OnInit } from '@angular/core';
import { ParroquiaService } from '../../services/parroquia.service';
import { MessageGrowlService } from '../../services/message-growl.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  cols: any = [];

  constructor(private parroquia: ParroquiaService, private messages: MessageGrowlService) { }

  ngOnInit() {
    this.cols = [];
    this.cols = [
      { field: 'nombre', header: 'Nombre', width: '20%' },
      { field: 'telefono', header: 'Teléfono', width: '50%' },
      { field: 'correo', header: 'Correo', width: '10%' },
      { field: 'lat', header: 'Latitud', width: '10%' },
      { field: 'lng', header: 'Longitud', width: '10%' }
    ];

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

  selectedPar: any;
  displayDialog: boolean;

  addParroquia() {
    this.parroquia.register(this.objParroquia).subscribe(data => {
      this.lstParroquias.push(this.objParroquia);
      this.messages.notify('success', 'Éxito', 'Ingreso Exitoso!');
      location.reload();
    }, err => {
      console.log(err);
    });
  }

  onRowSelect(event) {
    this.objParroquia = event.data;
    this.displayDialog = true;
  }

  delete() {
    let index = this.lstParroquias.indexOf(this.selectedPar);
    this.parroquia.delete(this.lstParroquias[index]).subscribe(data => {
      this.lstParroquias = this.lstParroquias.filter((val, i) => i != index);
      location.reload();
    }, err => {
      console.log(err);
    });
  }

  save() {
    let index = this.lstParroquias.indexOf(this.selectedPar);
    this.parroquia.update(this.lstParroquias[index]).subscribe(data => {
      this.objParroquia = {
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
      this.displayDialog = false;
    }, err => {
      console.log(err);
    });
  }

}
