import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SearchbarComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [HeaderComponent, FooterComponent, SearchbarComponent]
})
export class SharedModule {}
