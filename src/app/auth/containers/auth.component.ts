import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/user';
import * as fromAuth from '../reducers';
import * as Auth from '../actions/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  pending = this.store.select(fromAuth.getLoginPagePending);
  error = this.store.select(fromAuth.getLoginPageError);

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(event: Authenticate) {
    this.store.dispatch(new Auth.Login(event));
  }
}
