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
      { field: 'nombre', header: 'Nombre' },
      { field: 'telefono', header: 'Teléfono' },
      { field: 'correo', header: 'Correo' },
      { field: 'lat', header: 'Latitud' },
      { field: 'lng', header: 'Longitud' }
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
    console.log(event)
    
    /*this.parroquia.delete(this.lstParroquias[index]).subscribe(data => {
      //this.lstParroquias.splice(index, 1);
      location.reload();;
    }, err => {
      console.log(err)
     });*/
  }
  deleteRow(){
    
  }

}
