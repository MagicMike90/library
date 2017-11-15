import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';


@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pending: Observable<any>;
  error: Observable<any>;

  hide = true;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);

  constructor(private store: Store<fromAuth.State>) {

    this.pending = this.store.select(fromAuth.getLoginPagePending);
    this.error = this.store.select(fromAuth.getLoginPageError);

    // TEST : delay for form
    this.pending.delay(1000).subscribe(pending => pending ? this.form.disable() : this.form.enable());

    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  ngOnInit() {
    // this.form.disable();
  }

  getErrorMessage(type) {
    const errors = {};
    errors['email'] = (this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '');

    errors['password'] = (this.email.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minLength') ? 'Not a valid password' : '');
    return errors[type];
  }

  submit() {
    if (this.form.valid) {
      this.form.disable();
      this.store.dispatch(new Auth.Login(this.form.value));
    }
  }
}
