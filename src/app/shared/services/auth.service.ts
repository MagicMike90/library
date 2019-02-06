import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { _throw } from 'rxjs/throw';
import { Authenticate } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate) {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return _throw('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
