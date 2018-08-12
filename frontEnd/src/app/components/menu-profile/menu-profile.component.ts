import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent implements OnInit {

  constructor(private authenticate: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  onLogOutClick() {
    this.authenticate.logOut();
    this.router.navigate(['login']);
  }

  loadProfile(){
    this.router.navigate(['dashboard/profile']);
  }

}
