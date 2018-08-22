import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';

@Component({
  selector: 'app-par-barrio',
  templateUrl: './par-barrio.component.html',
  styleUrls: ['./par-barrio.component.css']
})
export class ParBarrioComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public messages: MessageGrowlService,
    public parroquiaService: ParroquiaService) { }

  ngOnInit() {
  }

  objBarrio = {
    descripcion: '',
    nroHabitantes: 0,
    altitud: 0,
    presidente: ''
  }

  save() {

  }
  hide(): void {
    this.dialog.closeAll();
  }

}
