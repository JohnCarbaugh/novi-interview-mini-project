import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;

  constructor () {}

  public mouseenter() {
    console.log('mouseenter');
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  public mouseleave() {
    console.log('mouseenter');
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
