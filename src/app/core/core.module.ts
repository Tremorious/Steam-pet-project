import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthDirective } from './directives/auth.directive';

@NgModule({
    declarations: [AuthDirective],
    imports: [CommonModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
    exports: [AuthDirective]
})
export class CoreModule {}
