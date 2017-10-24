import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";

class Menu {
  label: String;
  icon: String;
  link: String;
}
const PRINT_MOBILE = 'print and (max-width: 600px)';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = "";
  mode: String;
  open: Boolean;

  menus: Menu[];
  selectedLink: String;

  constructor(private router: Router, public media: ObservableMedia) {
 
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if (change.mqAlias == 'sm' || change.mqAlias == 'xs') {
        this.mode = 'over';
        this.open = false;
      }
      else {
        this.mode = 'side';
        this.open = true;
      }

    });
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
  ngOnInit() {
    const is_mobile = this.media.isActive('xs') || this.media.isActive('sm');
    if (is_mobile && !this.media.isActive(PRINT_MOBILE)) {
      this.mode = 'push';
      this.open = false;
    }else {
      this.mode = 'side';
      this.open = true;
    }

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
