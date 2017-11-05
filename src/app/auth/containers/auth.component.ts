import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
// import fade in animation
// import { fadeInAnimation } from '../../animations/index';

import { Authenticate } from '../models/user';
import * as fromAuth from '../reducers';
import * as Auth from '../actions/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          { optional: true }),
        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
          { optional: true }),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
          { optional: true }),
      ])
    ])
  ]
})
export class AuthComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() { }

  // // change the animation state
  // getRouteAnimation(outlet) {
  //   return outlet.activatedRouteData.animation
  // }
  // getRouterOutletState(outlet: any) {
  //   return outlet.isActivated ? outlet.activatedRouteData.animation : '';
  //   // return outlet.activatedRouteData['animation'] || 'firstPage'; 
  // }
}
