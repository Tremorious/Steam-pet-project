import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game } from '../models/GameModel';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    public baseURL: string = environment.baseURL;
    private id: string | null;

    constructor(private http: HttpClient) {
        this.id = localStorage.getItem('id');
    }

    public getAllGames() {
        return this.http.get<Game[]>(this.baseURL + '/games');
    }

    public getAllUserGames() {
        return this.http.get<Game[]>(this.baseURL + '/games/' + this.id);
    }

    public addGame(gameId: number) {
        return this.http.patch(this.baseURL + '/games/add/' + this.id, { gameId });
    }

    public removeGame(gameId: number) {
        return this.http.patch(this.baseURL + '/games/remove/' + this.id, { gameId });
    }
}
