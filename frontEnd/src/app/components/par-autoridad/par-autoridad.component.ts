import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';
import { PassData1Service } from '../../services/pass-data1.service';

@Component({
  selector: 'app-par-autoridad',
  templateUrl: './par-autoridad.component.html',
  styleUrls: ['./par-autoridad.component.css']
})
export class ParAutoridadComponent implements OnInit {

  objAutoridad = {
    cedula: '',
    nombre: '',
    cargo: '',
    fechaFiliacion: '',
    telefono: '',
    correo: '',
    profesion: ''
  }

  constructor(
    public dialog: MatDialog,
    public messages: MessageGrowlService,
    public parroquiaService: ParroquiaService,
    private data: PassData1Service,
    ) { }

  ngOnInit() {
  }

  save() {

    this.data.changeMessage(this.objAutoridad)
      /*this.hide();*/
  }

  hide(): void {
    this.dialog.closeAll();
  }

}
