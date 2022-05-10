import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, NotFoundPageComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        DashboardModule,
        CoreModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
