import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
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
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
