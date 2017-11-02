import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Authenticate } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';


import {SpinnerComponent} from  '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pending: Observable<any>;
  error: Observable<any>;

  @ViewChild('content') content;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
  });

  constructor(private store: Store<fromAuth.State>, private modalService: NgbModal) {
    this.pending = this.store.select(fromAuth.getLoginPagePending);
    this.error = this.store.select(fromAuth.getLoginPageError);

    // TEST : delay for form 
    this.pending.delay(1000).subscribe(pending => pending ? this.form.disable() : this.form.enable());
  }
  ngOnInit() {
    // this.form.disable();
  }

  open() {
    const modalRef = this.modalService.open(SpinnerComponent);
    console.log('modalRef',modalRef);
    // this.modalService.open(this.content);
  }

  submit() {
    this.open();
    if (this.form.valid) {
      this.form.disable();

      this.store.dispatch(new Auth.Login(this.form.value));
    }
  }
}
