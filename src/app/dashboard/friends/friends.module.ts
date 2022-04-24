import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
    declarations: [FriendsPageComponent],
    imports: [CommonModule, FriendsRoutingModule, SharedModule, MaterialModule]
})
export class FriendsModule {}
