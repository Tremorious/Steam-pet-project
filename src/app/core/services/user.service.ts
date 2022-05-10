import { delay, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserCredentials } from '../models/UserCredentialsModel';
import { Friend } from '../models/FriendModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userLogin: string | null;
    private id: string | null;

    users$: Observable<Friend[]>;

    constructor(private http: HttpClient) {
        this.userLogin = localStorage.getItem('login');
        this.id = localStorage.getItem('id');

        this.users$ = this.http.get<Friend[]>(environment.baseURL + '/user/friends/' + this.id).pipe(delay(3000));
    }

    public getUserCredentials(): Observable<UserCredentials> {
        return this.http.get<UserCredentials>(environment.baseURL + '/user/profile/' + this.id);
    }

    public updateUserCredentrials(userObj: object) {
        return this.http.patch(environment.baseURL + '/user/profile/' + this.id, userObj);
    }

    public addFriend(username: string): Observable<{ [message: string]: string }> {
        return this.http.patch<{ [message: string]: string }>(environment.baseURL + '/user/friends/add/' + this.id, {
            username
        });
    }

    public removeFriend(username: string): Observable<{ [key: string]: string }> {
        return this.http.patch<{ [key: string]: string }>(environment.baseURL + '/user/friends/remove/' + this.id, {
            username
        });
    }
}
