import { Component } from '@angular/core';
import { Router, Route, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as layout from './core/actions/layout';

import { routerTransition } from './animations/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'Library';
  private activatedRoute: ActivatedRoute;

  constructor(private router: Router, fb: FormBuilder) {


    // this.router.events
    //   .filter((event) => event instanceof NavigationEnd)
    //   .subscribe((event) => {
    //     console.log('NavigationEnd:', event);
    //   });
  }

  prepareRouteTransition(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  // constructor(private store: Store<fromRoot.State>) {

  // }

  // closeSidenav() {
  //   /**
  //    * All state updates are handled through dispatched actions in 'container'
  //    * components. This provides a clear, reproducible history of state
  //    * updates and user interaction through the life of our
  //    * application.
  //    */
  //   this.store.dispatch(new layout.CloseSidenav());
  // }

  // openSidenav() {
  //   this.store.dispatch(new layout.OpenSidenav());
  // }
}
