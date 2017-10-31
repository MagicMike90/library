import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AuthComponent } from './containers/auth.component';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';

// const authRoutes: Routes = [
//   {
//     path: 'auth', component: AuthComponent,
//     children: [
//       { path: 'login', component: LoginFormComponent },
//       { path: 'forgot', component: ForgotFormComponent },
//       { path: 'register', component: RegisterFormComponent }
//     ]
//   }
// ];

const authRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'forgot', component: ForgotFormComponent },
  { path: 'register', component: RegisterFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // register additional route
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent, ForgotFormComponent],
  providers: [AuthService, AuthGuard]
})

export class AuthRoutingModule { }
