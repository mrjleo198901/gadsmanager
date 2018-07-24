import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegistroComponent } from '../registro/registro.component';
import { MessageGrowlService } from '../../services/message-growl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(public dialog: MatDialog, public messages: MessageGrowlService) { }

  ngOnInit() {
    this.messages.notify('warn', 'Advertencia', 'Registro eliminado!');
  }

  login() {
    console.log(this.email)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '450px',
      data: { name: 'asd', animal: 'asdasd' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}