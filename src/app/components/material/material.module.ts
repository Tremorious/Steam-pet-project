import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatSliderModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}
