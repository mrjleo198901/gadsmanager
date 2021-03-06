import { Component, OnInit, Input, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ParAutoridadComponent } from '../par-autoridad/par-autoridad.component';
import { ParBarrioComponent } from '../par-barrio/par-barrio.component';
import { ParActividadComponent } from '../par-actividad/par-actividad.component';
import { ParGastroComponent } from '../par-gastro/par-gastro.component';
import { ParTurismoComponent } from '../par-turismo/par-turismo.component';
import { ParHistoriaComponent } from '../par-historia/par-historia.component';
import { ParGaleriaComponent } from '../par-galeria/par-galeria.component';
import { MessageGrowlService } from '../../services/message-growl.service';
import { PassDataService } from '../../services/pass-data.service';
import { ParroquiaService } from '../../services/parroquia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parroquia-design',
  templateUrl: './parroquia-design.component.html',
  styleUrls: ['./parroquia-design.component.css']
})
export class ParroquiaDesignComponent implements OnInit {
  @Input() value;

  constructor(
    private dialog: MatDialog,
    private messages: MessageGrowlService,
    private route: ActivatedRoute,
    private data: PassDataService,
    private parroquiaService: ParroquiaService) {

  }

  message: any;

  ngOnInit() {

    this.data.currentMessage.subscribe(message => {

      this.message = message;
      this.objParroquia._id = this.message._id;
      this.objParroquia.nombre = this.message.nombre;
      this.objParroquia.telefono = this.message.telefono;
      this.objParroquia.correo = this.message.correo;
      this.objParroquia.latitud = this.message.latitud;
      this.objParroquia.longitud = this.message.longitud;
      if (message != undefined) {
        this.parroquiaService.getUserById(message).subscribe(data => {
          this.objParroquia = data[0];
          this.images = [];
          for (let entry of this.objParroquia.galeria) {
            this.images.push(entry);
          }
          console.log(this.images);
        });
      }

    })

  }


  objParroquia = {
    _id: '',
    nombre: '',
    telefono: '',
    correo: '',
    latitud: 0,
    longitud: 0,
    autoridad: [],
    barrio: [],
    actividadEco: [],
    gastronomia: '',
    turismo: '',
    historia: '',
    galeria: [],
    fiestas: []
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

  images: any[];

  openDialogAutoridad(): void {
    this.objAutoridad = {
      cedula: '',
      nombre: '',
      cargo: '',
      fechaFiliacion: '',
      telefono: '',
      correo: '',
      profesion: ''
    }
  }
  openDialogBarrio(): void {
    this.objBarrio = {
      descripcion: '',
      nroHabitantes: 0,
      altitud: 0,
      presidente: ''
    }
  }
  openDialogActividad(): void {
    this.objActividad = {
      nombre: '',
      descripcion: ''
    }
  }
  openDialogFiesta(): void {
    this.objFiestas = {
      nombre: '',
      descripcion: ''
    }
  }
  openDialogHistoria(): void {
    const dialogRef = this.dialog.open(ParHistoriaComponent, {
      width: '450px'
    });
  }
  openDialogGaleria(): void {
    const dialogRef = this.dialog.open(ParGaleriaComponent, {
      width: '450px'
    });
  }
  displayAuto = false;
  displayBarrio = false;
  displayAct = false;
  displayFiestas = false;
  save() {
    let cars = [...this.objParroquia.autoridad];
    cars.push(this.objAutoridad);
    this.objParroquia.autoridad = cars;
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objAutoridad = {
        cedula: '',
        nombre: '',
        cargo: '',
        fechaFiliacion: '',
        telefono: '',
        correo: '',
        profesion: ''
      }
      this.displayAuto = false;
      this.messages.notify('success', "Exito", "Datos guardados!");
    });
  }
  objBarrio = {
    descripcion: '',
    nroHabitantes: 0,
    altitud: 0,
    presidente: ''
  }
  //Guardar barrios
  
  saveBarrio() {
    let cars = [...this.objParroquia.barrio];
    cars.push(this.objBarrio);
    this.objParroquia.barrio = cars;
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objBarrio = {
        descripcion: '',
        nroHabitantes: 0,
        altitud: 0,
        presidente: ''
      }
      this.displayBarrio = false;
      this.messages.notify('success', "Exito", "Datos guardados!");
    });
  }
  objActividad = {
    nombre: '',
    descripcion: ''
  }
  objFiestas = {
    nombre: '',
    descripcion: ''
  }
  descripcion: any;

  saveAct() {
    let cars = [...this.objParroquia.actividadEco];
    cars.push(this.objActividad);
    this.objParroquia.actividadEco = cars;
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objActividad = {
        nombre: '',
        descripcion: ''
      }
      this.displayAct = false;
      this.messages.notify('success', "Exito", "Datos guardados!");
    });
  }

  saveFiestas() {
    let cars = [...this.objParroquia.fiestas];
    cars.push(this.objFiestas);
    this.objParroquia.fiestas = cars;
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objFiestas = {
        nombre: '',
        descripcion: ''
      }
      this.displayFiestas = false;
      this.messages.notify('success', "Exito", "Datos guardados!");
    });
  }

  saveAll() {
    this.objParroquia.galeria = [];
    this.objParroquia.galeria = this.images;
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.messages.notify('success', "Exito", "Datos guardados!");
    });
  }

  fileImagen: File = null;
  urlImagen: any = 'assets/images/user.png';
  uploadedFiles: any;
  // Cargar imagen
  cargaImagen(file: FileList) {
    this.fileImagen = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.urlImagen = event.target.result;
    };
    reader.readAsDataURL(this.fileImagen);
  }

  delete(i) {
    this.images.splice(i, 1);
  }

  saveInArray() {
    this.images.push({ source: this.urlImagen, alt: 'desc', title: 'img' });
    console.log(this.images);
  }

  displayAutoC: boolean;
  onRowSelectAuto(event) {
    this.objAutoridad = event.data;
    this.displayAutoC = true;
  }
  deleteAuto() {
    let index = this.objParroquia.autoridad.indexOf(this.objAutoridad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objParroquia.autoridad = this.objParroquia.autoridad.filter((val, i) => i != index);
      this.displayAutoC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }
  updateAuto() {
    let index = this.objParroquia.autoridad.indexOf(this.objAutoridad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayAutoC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }

  displayBarrioC: boolean;
  onRowSelectBarrio(event) {
    this.objBarrio = event.data;
    this.displayBarrioC = true;
  }
  deleteBarrio() {
    let index = this.objParroquia.barrio.indexOf(this.objBarrio);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objParroquia.barrio = this.objParroquia.barrio.filter((val, i) => i != index);
      this.displayBarrioC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }
  updateBarrio() {
    let index = this.objParroquia.barrio.indexOf(this.objBarrio);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayBarrioC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }

  displayActC: boolean;
  onRowSelectAct(event) {
    this.objActividad = event.data;
    this.displayActC = true;
  }
  deleteAct() {
    let index = this.objParroquia.actividadEco.indexOf(this.objActividad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objParroquia.actividadEco = this.objParroquia.actividadEco.filter((val, i) => i != index);
      this.displayActC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }
  updateAct() {
    let index = this.objParroquia.actividadEco.indexOf(this.objActividad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayActC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }

  displayFiestasC: boolean;
  onRowSelectFiesta(event) {
    this.objFiestas = event.data;
    this.displayFiestasC = true;
  }
  deleteFiesta() {
    let index = this.objParroquia.fiestas.indexOf(this.objFiestas);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.objParroquia.fiestas = this.objParroquia.fiestas.filter((val, i) => i != index);
      this.displayFiestasC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }
  updateFiesta() {
    let index = this.objParroquia.fiestas.indexOf(this.objFiestas);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayFiestasC = false;
      this.messages.notify('success', "Éxito", "Datos guardados!");
    });
  }

}
