import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pending: Observable<any>;
  error: Observable<any>;

  hide: boolean = true;

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
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    });
  }
  ngOnInit() {
    // this.form.disable();
  }

  submit() {
    if (this.form.valid) {
      this.form.disable();
      this.store.dispatch(new Auth.Login(this.form.value));
    }
  }
}
