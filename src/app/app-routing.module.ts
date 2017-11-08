import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContainersComponent } from './core/containers/containers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth/guards/auth.guard';

const RootRoutes: Routes = [
    { path: 'app', component: ContainersComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            RootRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
