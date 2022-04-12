import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },

            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
