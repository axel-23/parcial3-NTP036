import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(
    private menu: MenuController,
    private platform: Platform
    ) {
    this.initializeApp();
  }
    
  initializeApp() {
    this.platform.ready().then(() => {
    this.changeDarkMode();
    });
  }
    
  changeDarkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }

  closeMenu() {
    this.menu.close('end');
  }

  closeFAB() {
    this.menu.close('end');
  }
}
