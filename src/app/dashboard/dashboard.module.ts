import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { GamesModule } from './games/games.module';
import { LibraryModule } from './library/library.module';
import { FriendsModule } from './friends/friends.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, DashboardRoutingModule, GamesModule, LibraryModule, FriendsModule, ProfileModule]
})
export class DashboardModule {}
