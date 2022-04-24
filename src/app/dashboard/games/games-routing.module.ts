import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './games-page/games-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'games' },
    {
        path: 'games',
        component: GamesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {}
