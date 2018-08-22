import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ParAutoridadComponent } from '../par-autoridad/par-autoridad.component';
import { ParBarrioComponent } from '../par-barrio/par-barrio.component';
import { ParActividadComponent } from '../par-actividad/par-actividad.component';
import { ParGastroComponent } from '../par-gastro/par-gastro.component';
import { ParTurismoComponent } from '../par-turismo/par-turismo.component';
import { ParHistoriaComponent } from '../par-historia/par-historia.component';
import { ParGaleriaComponent } from '../par-galeria/par-galeria.component';
import { MessageGrowlService } from '../../services/message-growl.service';

@Component({
  selector: 'app-parroquia-design',
  templateUrl: './parroquia-design.component.html',
  styleUrls: ['./parroquia-design.component.css']
})
export class ParroquiaDesignComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private messages: MessageGrowlService) { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/images/users/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/images/users/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/images/users/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/images/users/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/images/users/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/images/users/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/images/users/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
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

  images: any[];

  openDialogAutoridad(): void {
    const dialogRef = this.dialog.open(ParAutoridadComponent, {
      width: '450px'
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
}
