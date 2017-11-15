import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Registration from '../../actions/registration';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  pending: Observable<any>;
  error: Observable<any>;

  hide = true;

  form: FormGroup;

  constructor(private store: Store<fromAuth.State>) {

    this.pending = this.store.select(fromAuth.getLoginPagePending);
    this.error = this.store.select(fromAuth.getLoginPageError);

    // TEST : delay for form
    this.pending.delay(1000).subscribe(pending => pending ? this.form.disable() : this.form.enable());

    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    });
  }

  ngOnInit() {
  }
  submit() {
    if (this.form.valid) {
      this.form.disable();
      this.store.dispatch(new Registration.Signup(this.form.value));
    }
  }
}
