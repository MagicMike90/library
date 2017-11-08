import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';


const PRINT_MOBILE = 'print and (max-width: 600px)';
@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit, OnDestroy {
  private menus: any;
  private mode: string;
  private openSidenav: boolean;
  private watcher: Subscription;
  private activeMediaQuery: string;

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
    // windows observer event
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.mode = 'over';
        this.openSidenav = false;
      } else {
        this.mode = 'side';
        this.openSidenav = true;
      }
    });

    const is_mobile = this.media.isActive('xs') || this.media.isActive('sm');
    if (is_mobile && !this.media.isActive(PRINT_MOBILE)) {
      this.mode = 'push';
      this.openSidenav = false;
    } else {
      this.mode = 'side';
      this.openSidenav = true;
    }

    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
      { label: 'Customers', icon: 'people', link: '/customers' },
      { label: 'Segments', icon: 'label', link: '/segments' },
      { label: 'Orders', icon: 'receipt', link: '/orders' },
      { label: 'Categories', icon: 'bookmark', link: '/categories' },
    ];

    // this.router.events.subscribe((val) => {
    //   // see also
    //   if (val instanceof NavigationEnd) {
    //     this.selectedLink = window.location.pathname;
    //   }
    //   // console.log(val instanceof NavigationEnd)
    // });
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
