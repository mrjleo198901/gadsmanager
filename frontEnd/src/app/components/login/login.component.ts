import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { RecoveryComponent } from '../recovery/recovery.component';
import { MessageGrowlService } from '../../services/message-growl.service';
import { LoginService } from '../../services/login.service';
import { ValidateService } from '../../services/validate.service';
import { AuthenticateService } from '../../services/authenticate.service';

import { SentComponent } from '../sent/sent.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objLogin = {
    correo: '',
    password: ''
  }
  flagRememberMe = false;

  constructor(public dialog: MatDialog,
    public messages: MessageGrowlService,
    public loginService: LoginService,
    public validateService: ValidateService,
    public router: Router,
    public authService: AuthenticateService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('correo')) {
      this.objLogin.correo = JSON.parse(localStorage.getItem('correo'));
      this.flagRememberMe = true;
    }
  }

  doLogin() {
    if (this.flagRememberMe == true) {
      localStorage.setItem('correo', JSON.stringify(this.objLogin.correo));
    } else {
      localStorage.removeItem('correo');
    }
    this.loginService.authenticateUser(this.objLogin).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.messages.notify('info', 'Información', 'Bienvenido ' + data.user.nombre.split(' ')[0]);
        this.router.navigate(['dashboard/general']);
      } else {
        this.messages.notify('error', 'Error', data.msg);
      }
    });
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '450px'
    });
  }

  openDialogRecovery(): void {
    const dialogRef = this.dialog.open(RecoveryComponent, {
      width: '450px'
    });
  }

  onChangeCorreo() {
    if (this.objLogin.correo.length >= 10) {
      if (!this.validateService.validateEmail(this.objLogin.correo)) {
        this.messages.notify('error', 'Error', 'Mail inválido!')
      } else {
        this.messages.notify("success", "Éxito", "Mail válido!");
      }
    }
  }

  openDialogSent(): void {
    const dialogRef = this.dialog.open(SentComponent, {
      width: '450px'
    });
  }

  showSent() {
    this.openDialogSent();
  }

}