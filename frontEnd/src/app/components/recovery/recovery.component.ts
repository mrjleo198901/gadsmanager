import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { MessageGrowlService } from '../../services/message-growl.service';
import { LoginService } from '../../services/login.service';
import { MatDialog } from '@angular/material';
import { User } from '../../models/user';
import { SentComponent } from '../sent/sent.component';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor(
    public validateService: ValidateService,
    public message: MessageGrowlService,
    public loginService: LoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  email;
  alertClass;
  messageAlert;
  showMessages = false;
  flagMailFound = false;
  public currentUser = undefined;
  screen = true;
  progress = 'Enviando...'
  showBar = true;

  onChangeCorreo() {
    if (this.email.length >= 10) {
      if (!this.validateService.validateEmail(this.email)) {
        this.showMessages = false;
        this.flagMailFound = false;
      } else {
        this.showMessages = true
        this.message.notify("success", "Éxito", "Mail válido!");
        this.loginService.getUserById(this.email).subscribe(data => {
          if (data.length > 0) {
            this.alertClass = "alert alert-success";
            this.messageAlert = "Correo encontrado!";
            this.flagMailFound = true;
            this.currentUser = data[0];
          } else {
            this.alertClass = "alert alert-danger";
            this.messageAlert = "Correo no encontrado!";
            this.flagMailFound = false;
          }
        });
      }
    } else {
      this.showMessages = false;
      this.flagMailFound = false;
    }
  }

  sendEmail() {
    this.screen = false;
    let usr = new User();
    const user = {
      name: this.currentUser.nombre.split(' ')[0],
      email: this.currentUser.correo,
      username: this.currentUser.correo,
      npass: this.validateService.makeId()
    }
    this.loginService.sendEmailProgress(user).subscribe(data => {
      this.currentUser.password = user.npass;
      this.loginService.updateUser(this.currentUser).subscribe(data => {
        this.message.notify('info', 'Info', 'Se ha enviado el correo con la nueva clave');
        console.log(data);
        this.progress = "Correo Enviado...!!";
        this.showBar = false
      }, err => {
        console.log(err)
      });
    })
  }

  hideDialog(): void {
    this.dialog.closeAll();
  }

  openDialogSent(): void {
    const dialogRef = this.dialog.open(SentComponent, {
      width: '450px'
    });
  }

}
