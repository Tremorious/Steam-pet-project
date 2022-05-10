import { GameDetails } from 'src/app/core/models/GameDetailsModel';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SpecificGameResolverService } from 'src/app/core/services/resolvers/specific-game-resolver.service';
import { GamesPageComponent } from './games-page/games-page.component';
import { SpecificGamePageComponent } from './specific-game-page/specific-game-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'games' },
    {
        path: 'games',
        component: GamesPageComponent
    },
    {
        path: 'games/:name',
        component: SpecificGamePageComponent,
        resolve: { gameData: SpecificGameResolverService }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}
