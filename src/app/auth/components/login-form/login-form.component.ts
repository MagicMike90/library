import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';
interface Error {
  email?: string;
  password?: string;
}
@Component({
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
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.required
  ]);

  constructor(private store: Store<fromAuth.State>) {
    this.pending = this.store.pipe(select(fromAuth.getLoginPagePending));
    this.error = this.store.pipe(select(fromAuth.getLoginPageError));

    console.log(this.pending);

    // TEST : delay for form
    this.pending.subscribe(pending =>
      pending ? this.form.disable() : this.form.enable()
    );

    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
  ngOnInit() {
    // this.form.disable();
  }

  getErrorMessage(type) {
    const errors: Error = {};
    errors.email = this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';

    errors.password = this.email.hasError('required')
      ? 'You must enter a value'
      : this.password.hasError('minLength')
      ? 'Not a valid password'
      : '';
    return errors[type];
  }

  submit() {
    if (this.form.valid) {
      this.form.disable();
      this.store.dispatch(new Auth.Login(this.form.value));
    }
  }
}
