import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pending: Observable<any>;
  error: Observable<any>;


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store<fromAuth.State>) {
    this.pending = this.store.select(fromAuth.getLoginPagePending);
    this.error = this.store.select(fromAuth.getLoginPageError);

    this.form.disable();
    // this.pending.subscribe(pending => pending ? this.form.disable() : this.form.enable());
  }
  ngOnChanges(changes) {

  }
  ngOnInit() { }

  submit() {
    if (this.form.valid) {
      this.form.disable()
      // console.log('submit', this.form.value);
      // this.submitted.emit(this.form.value);
      this.store.dispatch(new Auth.Login(this.form.value));
    }
  }
}
