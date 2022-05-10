import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
    declarations: [LibraryPageComponent],
    imports: [CommonModule, LibraryRoutingModule, ReactiveFormsModule, MaterialModule]
})
export class LibraryModule {}
