import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ParroquiaService } from '../../services/parroquia.service';

@Component({
  selector: 'app-par-galeria',
  templateUrl: './par-galeria.component.html',
  styleUrls: ['./par-galeria.component.css']
})
export class ParGaleriaComponent implements OnInit {

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
