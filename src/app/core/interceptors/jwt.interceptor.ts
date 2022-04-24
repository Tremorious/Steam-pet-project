import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const jwt = request.clone({
            headers: request.headers
                .set('Authorization', `Bearer ${localStorage.getItem('auth-token')}`)
                .set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com')
                .set('X-RapidAPI-Key', '6cf592a20cmsh90931b191c2d95ap19b886jsnd993b111fa48')
                .set('Access-Control-Allow-Origin', '*')
        });
        return next.handle(jwt);
    }
}
