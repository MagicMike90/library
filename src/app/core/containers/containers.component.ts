import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as rootReducer from '../../reducers';
import * as layout from '../actions/layout';

const PRINT_MOBILE = 'print and (max-width: 600px)';
@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit, OnDestroy {
  private menus: any;
  private mode: string;
  private open: boolean;
  private watcher: Subscription;
  private activeMediaQuery: string;
  private selectedLink: string;

  private showSidenav: Observable<boolean>;
  private loggedIn: Observable<boolean>;

  constructor(
    private mediaObserver: MediaObserver,
    private store: Store<rootReducer.State>,
    private router: Router
  ) {
    // have to place in constructor, otherwise it would work
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        // console.log('ContainersComponent NavigationEnd:', event);
      });
  }

  ngOnInit() {
    this.selectedLink = '/app/dashboard';

    // windows observer event
    this.watcher = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.activeMediaQuery = change
          ? `'${change.mqAlias}' = (${change.mediaQuery})`
          : '';
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          this.mode = 'over';
          this.open = false;
        } else {
          this.mode = 'side';
          this.open = true;
        }
      }
    );

    this.menus = [
      { label: 'Dashboard', icon: 'dashboard', link: '/app/dashboard' },
      { label: 'Customers', icon: 'people', link: '/app/customers' },
      { label: 'Segments', icon: 'label', link: '/app/segments' },
      { label: 'Orders', icon: 'receipt', link: '/app/orders' },
      { label: 'Categories', icon: 'bookmark', link: '/app/categories' }
    ];

    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.store.select(rootReducer.getShowSidenav).subscribe(open => {
      const isMobile =
        this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
      if (isMobile && !this.mediaObserver.isActive(PRINT_MOBILE)) {
        this.mode = 'over';
        this.open = open;
      } else {
        // desktop mode
        this.mode = 'side';
        this.open = true;
      }
    });
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSidenav());
  }
  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }
}
