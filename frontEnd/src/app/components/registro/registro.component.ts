import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageGrowlService } from '../../services/message-growl.service';
import { LoginService } from '../../services/login.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  objUser = {
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    estado: 1,
    tipoUser: '5b525c312bd8b21ed49852b0'/*Id de usuario tipo administrador*/
  }
  password: any;

  constructor(
    public dialog: MatDialog,
    public messages: MessageGrowlService,
    public loginService: LoginService,
    public validate: ValidateService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loginService.registerUser(this.objUser).subscribe(data => {
      console.log(data);
      this.messages.notify('info', 'Información', "Bienvenid@ " + data.nombre.split(' ')[0] + ', te encuentras registrad@..!');
      this.hideDialog();
    }, err => {
      console.log(err);
      if (err.error.code === 11000) {
        this.messages.notify('warn', 'Advertencia', 'El correo ' + this.objUser.correo + ', ya se encuentra registrado.');
      } else {
        this.messages.notify('error', 'Error', 'Algo salió mal!');
      }
    });
  }

  hideDialog(): void {
    this.dialog.closeAll();
  }

  onChangePass() {
    if (this.objUser.password.length >= 8) {
      if (this.objUser.password === this.password) {
        this.messages.notify('info', 'Éxito', 'Las contraseñas coinciden');
      } else {
        this.messages.notify('error', 'Error', 'Las contraseñas no coinciden');
      }
    }
  }

  onChangePassR() {
    if (this.password.length >= 8) {
      if (this.objUser.password === this.password) {
        this.messages.notify('info', 'Éxito', 'Las contraseñas coinciden');
      } else {
        this.messages.notify('error', 'Error', 'Las contraseñas no coinciden');
      }
    }
  }

  onChangeNombre($event) {
    this.objUser.nombre = this.objUser.nombre.trim();
    this.objUser.nombre = this.validate.toTitleCase(this.objUser.nombre);
  }

  onChangeApellido($event) {
    this.objUser.apellido = this.objUser.apellido.trim();
    this.objUser.apellido = this.validate.toTitleCase(this.objUser.apellido);
  }

}
