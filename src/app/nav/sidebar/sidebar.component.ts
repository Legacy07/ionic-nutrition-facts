import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ISideBarItem, SideBarItem } from './shared/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pages = Array<ISideBarItem>();
  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.addMenuPages();
  }

  addMenuPages() {
    this.pages = new Array<ISideBarItem>(
      new SideBarItem('Diary', '/dashboard/diary', 'newspaper-outline'),
      new SideBarItem('Foods', '/dashboard/foods', 'fast-food-outline'),
      new SideBarItem('Admin', '/dashboard/admin', 'albums-outline'),
      new SideBarItem('Settings', '/dashboard/settings', 'settings-outline')
    );
  }
}

