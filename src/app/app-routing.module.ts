import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/guards/auth-guard.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
