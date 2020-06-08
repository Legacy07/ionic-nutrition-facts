import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public title = "Settings";

  darkMode = false;

  constructor() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDark.addListener(e => {
      this.setAppTheme(e.matches);
    })
  }

  ngOnInit() {}

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  setAppTheme(dark) {
    this.darkMode = dark;

    if (this.darkMode) {
      document.body.classList.add("dark");
    }
    else {
      document.body.classList.remove("dark");
    }
  }
}
