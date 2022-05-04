import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const jwt = request.clone({
            headers: request.headers
                .set('Authorization', `Bearer ${localStorage.getItem('auth-token')}`)
                .set('X-RapidAPI-Host', environment.hostKey)
                .set('X-RapidAPI-Key', environment.apiKey)
                .set('Access-Control-Allow-Origin', '*')
        });
        return next.handle(jwt);
    }
}
