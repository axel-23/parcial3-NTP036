import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
 
  darkMode: boolean = true;
 
  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  change() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  ngOnInit() {
  }

  account = [
    {
      id: 1
    }
  ]

  history = [
    {
      id: 2
    }
  ]

  notifications = [
    {
      id: 3
    }
  ]

  pays = [
    {
      id: 4
    }
  ]

  iconWork(id: string ){
    let icon1 = document.getElementById(id);
    icon1.style.display = "none";

    let icon2 = document.getElementById(id+'icon2');
    icon2.style.display = "block";
    
    let content = document.getElementById(id+'content');
    content.style.display = "block";
    
  }

  revIconWork(id: string ){
    let icon1 = document.getElementById(id);
    icon1.style.display = "block";

    let icon2 = document.getElementById(id+'icon2');
    icon2.style.display = "none";

    let content = document.getElementById(id+'content');
    content.style.display = "none";
  }

}
