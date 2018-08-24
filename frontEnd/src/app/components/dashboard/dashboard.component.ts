import * as $ from 'jquery';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { ParroquiaService } from '../../services/parroquia.service';
import { PassDataService } from '../../services/pass-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [PassDataService]
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  menuOptions: any[] = [];
  selectedPar: any;
  shoes: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticate: AuthenticateService,
    private parroquia: ParroquiaService,
    private router: Router,
    private data: PassDataService) {

    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.data.currentMessage.subscribe(message => this.message = message)

  }

  ngOnInit() {
    this.parroquia.getAll().subscribe(data => {
      /*for (let entry of data) {
        this.menuOptions.push(entry.nombre);
      }*/
      this.menuOptions = data;
      console.log(this.menuOptions)
    }, err => {
      console.log(err);
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  goGeneral() {
    this.router.navigate(['dashboard/general']);
  }

  goParroquiaDesign(link) {
    this.data.changeMessage(link);
    this.router.navigate(['dashboard/parroquiaDesign']);
  }

  message:string;

}
