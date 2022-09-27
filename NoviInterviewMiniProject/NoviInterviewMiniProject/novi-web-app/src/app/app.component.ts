import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;

  constructor() {
    this.setTheme();
  }

  private setTheme() {
    const darkClass = 'dark-theme';
    document.body.classList.add(darkClass);
  }

}
