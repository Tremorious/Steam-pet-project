import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from '../is-authenticated.guard';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [IsAuthenticatedGuard],
        children: [
            { path: '', redirectTo: 'games', pathMatch: 'full' },
            { path: 'games', component: GamesComponent },
            { path: 'library', component: LibraryComponent },
            { path: 'friends', component: FriendsComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
