import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {Subscription} from "rxjs/Subscription";

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
  watcher: Subscription;
  activeMediaQuery = "";

  mode : String;
  menus: Menu[];
  selectedLink: String;

  constructor(private router: Router, media: ObservableMedia) { 
    this.mode = 'push;
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if ( change.mqAlias == 'xs') {
        this.mode = 'over';
      }
      else {
        this.mode = 'side';
      }
        
    });
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
  ngOnInit() {
    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
      { label: 'Heroes', icon: 'people', link: '/heroes' },
    ];

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
