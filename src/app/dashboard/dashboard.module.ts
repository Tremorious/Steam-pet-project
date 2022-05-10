import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { GamesModule } from './games/games.module';
import { LibraryModule } from './library/library.module';
import { FriendsModule } from './friends/friends.module';
import { ProfileModule } from './profile/profile.module';
import { GamesPageResolverService } from '../core/services/resolvers/games-page-resolver.service';
import { FriendsPageResolverService } from '../core/services/resolvers/friends-page-resolver.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, DashboardRoutingModule, GamesModule, LibraryModule, FriendsModule, ProfileModule],
    providers: [GamesPageResolverService, FriendsPageResolverService]
})
export class DashboardModule {}
