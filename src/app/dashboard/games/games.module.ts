import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';

import { GamesPageComponent } from './games-page/games-page.component';

import { SliderComponent } from './slider/slider.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecificGamePageComponent } from './specific-game-page/specific-game-page.component';
import { SpecificGameResolverService } from 'src/app/core/services/resolvers/specific-game-resolver.service';

@NgModule({
    declarations: [
        GamesPageComponent,
        SliderComponent,
        RecommendationComponent,
        CardComponent,
        RecentlyAddedComponent,
        SpecificGamePageComponent
    ],
    imports: [CommonModule, GamesRoutingModule, MaterialModule, SharedModule],
    providers: [SpecificGameResolverService]
})
export class GamesModule {}
