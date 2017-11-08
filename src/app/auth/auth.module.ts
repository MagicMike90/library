import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialUiModule } from '../material-ui/material-ui.module';

import { SharedModule } from '../shared/shared.module';
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
//     path: 'login', component: AuthComponent,
//     children: [
//       { path: '', redirectTo: '/login/identity', pathMatch: 'full' },
//       { path: 'identity', component: LoginFormComponent },
//       { path: 'forgot', component: ForgotFormComponent },
//       { path: 'register', component: RegisterFormComponent }
//     ]
//   }
// ];

// const authRoutes: Routes = [
//   { path: 'login', component: LoginFormComponent },
//   { path: 'forgot', component: ForgotFormComponent },
//   { path: 'register', component: RegisterFormComponent }
// ];

const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'forgot', component: ForgotFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MaterialUiModule,
    SharedModule,
    // register additional route
    RouterModule.forRoot(authRoutes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent, ForgotFormComponent],
  providers: [AuthService, AuthGuard]
})

export class AuthRoutingModule { }
