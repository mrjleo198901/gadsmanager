import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MessageGrowlService } from '../../services/message-growl.service';
import { ValidateService } from '../../services/validate.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  objUser = {
    _id: undefined,
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    estado: 1,
    tipoUser: '5b525c312bd8b21ed49852b0'/*Id de usuario tipo administrador*/
  }
  password: any;
  msg: string = '';
  textColor: string = '';
  showM = false;
  constructor(
    private messages: MessageGrowlService,
    private validate: ValidateService,
    private login: LoginService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.objUser._id = this.user._id;
    this.objUser.nombre = this.user.nombre;
    this.objUser.apellido = this.user.apellido;
    this.objUser.correo = this.user.correo;
    this.objUser.password = this.user.password;
    this.objUser.estado = this.user.estado;
    this.objUser.tipoUser = this.user.tipoUser;
  }

  ngOnInit() {
    this.password = this.objUser.password;
  }

  onChangePass() {
    if (this.objUser.password.length >= 8) {
      this.showM = true;
      if (this.objUser.password === this.password) {
        this.textColor = 'green';
        this.msg = 'Las contraseñas coinciden';
      } else {
        this.textColor = 'red';
        this.msg = 'Las contraseñas no coinciden';
      }
    }
  }

  onChangePassR() {
    if (this.password.length >= 8) {
      this.showM = true;
      if (this.objUser.password === this.password) {
        this.textColor = 'green';
        this.msg = 'Las contraseñas coinciden';
      } else {
        this.textColor = 'red';
        this.msg = 'Las contraseñas no coinciden';
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

  update() {
    this.login.updateUser(this.objUser).subscribe(data => {
      if (data)
        this.messages.notify('info', 'Éxito', 'Actualización exitosa!');
    }, err => {
      console.log(err);
    })

  }

}
