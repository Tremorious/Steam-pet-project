import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule
    ]
})
export class AuthModule {}
