import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { rxjs } from 'rxjs/rxjs';

class Menu {
  label: String;
  icon: String;
  link: String;
}
const PRINT_MOBILE = 'print and (max-width: 600px)';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, OnChanges, OnDestroy {
  watcher: rxjs;
  activeMediaQuery: string;
  mode: String;
  open: Boolean;

  menus: Menu[];
  selectedLink: String;

  @Input() id: string;

  constructor(private router: Router, public media: ObservableMedia) {

    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.mode = 'over';
        this.open = false;
      } else {
        this.mode = 'side';
        this.open = true;
      }

    });
  }
  ngOnChanges() {
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
  ngOnInit() {
    const is_mobile = this.media.isActive('xs') || this.media.isActive('sm');
    if (is_mobile && !this.media.isActive(PRINT_MOBILE)) {
      this.mode = 'push';
      this.open = false;
    } else {
      this.mode = 'side';
      this.open = true;
    }

    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
      { label: 'Customers', icon: 'people', link: '/customers' },
      { label: 'Segments', icon: 'label', link: '/segments' },
      { label: 'Orders', icon: 'receipt', link: '/orders' },
      { label: 'Categories', icon: 'bookmark', link: '/categories' },
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
