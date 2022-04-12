import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../components/material/material.module';
import { HeaderComponent } from './header/header.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { GameCardComponent } from './game-card/game-card.component';
import { RangeFilterPipe } from './games/range-filter.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        DashboardComponent,
        ProfileComponent,
        LibraryComponent,
        FriendsComponent,
        GamesComponent,
        SearchbarComponent,
        GameCardComponent,
        RangeFilterPipe
    ],
    imports: [CommonModule, MaterialModule, RouterModule, DashboardRoutingModule, ReactiveFormsModule, FormsModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        {
            provide: UserService
        }
    ],
})
export class DashboardModule {}
