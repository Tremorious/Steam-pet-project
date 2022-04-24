import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';

import { GamesPageComponent } from './games-page/games-page.component';

import { SliderComponent } from './slider/slider.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';

@NgModule({
    declarations: [GamesPageComponent, SliderComponent, RecommendationComponent, CardComponent, RecentlyAddedComponent],
    imports: [CommonModule, GamesRoutingModule, MaterialModule]
})
export class GamesModule {}
