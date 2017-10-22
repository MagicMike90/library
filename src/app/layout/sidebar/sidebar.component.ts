import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
  selectedLink: String;

  constructor(private router: Router, private url: Location) { }

  ngOnInit() {
    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
      { label: 'Heroes', icon: 'people', link: '/heroes' },
    ];
    // let currentUrl = this.router.url;
    // console.log('currentUrl', currentUrl);
    this.router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        this.selectedLink = window.location.pathname;
      }
      // console.log(val instanceof NavigationEnd)
    });
  }
  onSelect(link: String): void {
    this.selectedLink = link;
  }
}
