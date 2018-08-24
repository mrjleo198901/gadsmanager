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
export class ParroquiaDesignComponent implements OnInit, AfterViewInit {
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
          console.log(data)
          this.objParroquia = data[0];
        });
      }

    })

    this.images = [];
    this.images.push({ source: 'assets/images/users/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/images/users/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/images/users/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/images/users/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/images/users/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/images/users/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/images/users/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });

  }
  ngAfterViewInit() {
    /**/

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
    galeria: ''
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
    const dialogRef = this.dialog.open(ParAutoridadComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  openDialogBarrio(): void {
    const dialogRef = this.dialog.open(ParBarrioComponent, {
      width: '450px'
    });
  }
  openDialogGastro(): void {
    const dialogRef = this.dialog.open(ParBarrioComponent, {
      width: '450px'
    });
  }
  openDialogActividad(): void {
    const dialogRef = this.dialog.open(ParActividadComponent, {
      width: '450px'
    });
  }
  openDialogTurismo(): void {
    const dialogRef = this.dialog.open(ParTurismoComponent, {
      width: '450px'
    });
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
  save() {
    this.objParroquia.autoridad.push(this.objAutoridad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayAuto = false;
      this.messages.notify('success',"Exito","Datos guardados!");
    });
  }
  objBarrio = {
    descripcion: '',
    nroHabitantes: 0,
    altitud: 0,
    presidente: ''
  }

  saveBarrio() {
    console.log(this.objParroquia)
    this.objParroquia.barrio.push(this.objBarrio);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayBarrio = false;
      this.messages.notify('success',"Exito","Datos guardados!");
    });
  }
  objActividad = {
    nombre: '',
    descripcion: ''
  }
  descripcion: any;

  saveAct() {
    this.objParroquia.actividadEco.push(this.objActividad);
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.displayAct = false;
      this.messages.notify('success',"Exito","Datos guardados!");
    });
  }

  saveAll() {
    this.parroquiaService.update(this.objParroquia).subscribe(data => {
      this.messages.notify('success',"Exito","Datos guardados!");
    });
  }


}
