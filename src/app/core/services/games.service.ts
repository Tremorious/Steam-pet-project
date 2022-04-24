import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameDetails } from '../models/GameDetailsModel';
import { Game, GameAPI } from '../models/GameModel';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    public baseURL: string = environment.baseURL;
    private id: string | null;

    constructor(private http: HttpClient) {
        this.id = localStorage.getItem('id');
    }

    public getAllGames(): Observable<Game[]> {              
        return this.http.get<Game[]>(this.baseURL + '/games');
    }

    public getAllUserGames(): Observable<Game[]> {
        return this.http.get<Game[]>(this.baseURL + '/games/' + this.id);
    }

    public addGame(gameId: string) {
        return this.http.patch(this.baseURL + '/games/add/' + this.id, { gameId });
    }

    public removeGame(gameId: string) {
        return this.http.patch(this.baseURL + '/games/remove/' + this.id, { gameId });
    }

    public getAllAPIGames(): Observable<GameAPI[]> {
        return this.http.get<GameAPI[]>('https://free-to-play-games-database.p.rapidapi.com/api/games');
    }

    public getGameById(params: any): Observable<GameDetails> {
        return this.http.get<GameDetails>('https://free-to-play-games-database.p.rapidapi.com/api/game', {
            params: params
        });
    }
}
