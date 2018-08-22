import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';

@Component({
  selector: 'app-par-gastro',
  templateUrl: './par-gastro.component.html',
  styleUrls: ['./par-gastro.component.css']
})
export class ParGastroComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public messages: MessageGrowlService,
    public parroquiaService: ParroquiaService) { }

  ngOnInit() {
  }

  descripcion: ''

  save() {

  }
  hide(): void {
    this.dialog.closeAll();
  }

}
