import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/UserModel';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public baseURL: string = environment.baseURL;
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(private http: HttpClient) {
        const token = localStorage.getItem('auth-token');
        this._isLoggedIn$.next(!!token);
    }

    login(userObj: User): Observable<void> {
        return this.http.post(`${this.baseURL}/auth/login`, userObj).pipe(
            map((responceToken: any) => {
                const jwtHelper = new JwtHelperService();
                const userInfo = jwtHelper.decodeToken(responceToken);
                localStorage.setItem('id', userInfo.id);
                localStorage.setItem('role', userInfo.roles);
                localStorage.setItem('auth-token', responceToken);

                this._isLoggedIn$.next(true);
            })
        );
    }
    registeration(userObj: User): Observable<Object> {
        return this.http.post(`${this.baseURL}/auth/registration`, userObj);
    }

    logout(): void {
        localStorage.clear();
        this._isLoggedIn$.next(false);
        window.location.reload();
    }
}
