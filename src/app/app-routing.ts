import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { CustomersComponent } from './pages/customers/customers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth/guards/auth.guard';

export const RootRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'customers', component: CustomersComponent },
    { path: '**', component: PageNotFoundComponent }
];


