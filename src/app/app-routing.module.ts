import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/containers/dashboard.component';
import { ContainersComponent } from './core/containers/containers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth/guards/auth.guard';

const RootRoutes: Routes = [
    {
        path: 'app', component: ContainersComponent, canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            // { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(RootRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
