import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsPageResolverService } from '../core/services/resolvers/friends-page-resolver.service';
import { GamesPageResolverService } from '../core/services/resolvers/games-page-resolver.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
        resolve: {
            data: GamesPageResolverService
        }
    },
    { path: 'library', loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule) },
    {
        path: 'friends',
        loadChildren: () => import('./friends/friends.module').then((m) => m.FriendsModule)
    },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
