import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [CommonModule, ProfileRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule]
})
export class ProfileModule {}
