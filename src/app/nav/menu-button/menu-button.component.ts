import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-menu-button",
  templateUrl: "./menu-button.component.html",
  styleUrls: ["./menu-button.component.scss"],
})
export class MenuButtonComponent implements OnInit {
  @Input() title?;
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
