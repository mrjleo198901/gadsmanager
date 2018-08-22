import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';

@Component({
  selector: 'app-par-autoridad',
  templateUrl: './par-autoridad.component.html',
  styleUrls: ['./par-autoridad.component.css']
})
export class ParAutoridadComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public messages: MessageGrowlService,
    public parroquiaService: ParroquiaService) { }

  ngOnInit() {
  }

  save() {

  }
  hide(): void {
    this.dialog.closeAll();
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
