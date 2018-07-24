import { Component, Input, Inject, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  public isSpinnerVisible = true;

  constructor() {
    setTimeout(function () {
      let v = document.getElementById('btnHide');
      if (v != null)
        v.click();
    }, 2500);
  }

  doClick() {
    this.isSpinnerVisible = false;
  }

}
