import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as layout from './layout/actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  public host_id: "LAYOUT_COMPONENT";

  constructor(private store: Store<fromRoot.State>) {
		
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
