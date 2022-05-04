import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserCredentials } from '../models/UserCredentialsModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userLogin: string | null;
    private id: string | null;

    constructor(private http: HttpClient) {
        this.userLogin = localStorage.getItem('login');
        this.id = localStorage.getItem('id');
    }

    public getUserCredentials(): Observable<UserCredentials> {
        return this.http.get<UserCredentials>(environment.baseURL + '/user/profile/' + this.id);
    }

    public updateUserCredentrials(userObj: object) {
        return this.http.patch(environment.baseURL + '/user/profile/' + this.id, userObj);
    }

    public getAllUsers() {
        return this.http.get(environment.baseURL + '/user/friends/' + this.id).pipe(
            map((responce: any) => {
                let { users } = responce;
                return users;
            })
        );
    }

    public addFriend(username: string) {
        return this.http.patch(environment.baseURL + '/user/friends/add/' + this.id, { username });
    }

    public removeFriend(username: string) {
        return this.http.patch(environment.baseURL + '/user/friends/remove/' + this.id, { username });
    }
}
