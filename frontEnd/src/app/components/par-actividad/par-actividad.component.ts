import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';

@Component({
  selector: 'app-par-actividad',
  templateUrl: './par-actividad.component.html',
  styleUrls: ['./par-actividad.component.css']
})
export class ParActividadComponent implements OnInit {

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

}
