import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AuthComponent } from './containers/auth.component';
import { LoginFormComponent } from './components/login-form.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';

const authRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: LoginFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // register additional route
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [AuthComponent, LoginFormComponent, LoginComponent, ForgotComponent],
  providers: [AuthService, AuthGuard]
})

export class AuthRoutingModule { }
