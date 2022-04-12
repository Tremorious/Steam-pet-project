import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
