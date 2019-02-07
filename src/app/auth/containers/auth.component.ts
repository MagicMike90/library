import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/router.animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition]
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  prepareRouteTransition(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
