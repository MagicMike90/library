import { Component, OnInit } from '@angular/core';

class Menu {
  label: String;
  icon: String;
  link: String;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  menus: Menu[];
  selectedMenu: Menu;

  constructor() { }

  ngOnInit() {
    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
      { label: 'Heroes', icon: 'people', link: '/heroes' },
    ];
  }
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
