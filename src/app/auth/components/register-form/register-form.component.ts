import { Component, OnInit } from '@angular/core';

// import fade in animation
// import { fadeInAnimation } from '../../../animations/index';

import { routerTransition } from '../../../animations/index';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  hide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
