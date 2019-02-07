import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as Auth from '../actions/auth';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import * as fromAuth from '../reducers';
import { AuthComponent } from './auth.component';

describe('Login Page', () => {
  let fixture: ComponentFixture<AuthComponent>;
  let store: Store<fromAuth.State>;
  let instance: AuthComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        StoreModule.forRoot({
          auth: combineReducers(fromAuth.reducers)
        }),
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule
      ],
      declarations: [AuthComponent, LoginFormComponent]
    });

    fixture = TestBed.createComponent(AuthComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  /**
   * Container components are used as integration points for connecting
   * the store to presentational components and dispatching
   * actions to the store.
   *
   * Container methods that dispatch events are like a component's output observables.
   * Container properties that select state from store are like a component's input properties.
   * If pure components are functions of their inputs, containers are functions of state
   *
   * Traditionally you would query the components rendered template
   * to validate its state. Since the components are analagous to
   * pure functions, we take snapshots of these components for a given state
   * to validate the rendered output and verify the component's output
   * against changes in state.
   */
  it('should compile', () => {
    fixture.detectChanges();

    // expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a login event on submit', () => {
    const $event: any = {};
    const action = new Auth.Login($event);

    // instance.onSubmit($event);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
