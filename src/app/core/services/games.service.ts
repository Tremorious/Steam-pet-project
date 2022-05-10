import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, share, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameDetails } from '../models/GameDetailsModel';
import { Game, GameAPI } from '../models/GameModel';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    private id: string | null;

    public allAPIGames$: Observable<GameAPI[]>;
    public games$: Observable<Game[]>;
    public genres$: Observable<string[]>;

    constructor(private http: HttpClient) {
        this.id = localStorage.getItem('id');

        this.allAPIGames$ = this.http
            .get<GameAPI[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
            .pipe(shareReplay(1));

        this.games$ = this.http.get<Game[]>(environment.baseURL + '/games').pipe(shareReplay(1));

        this.genres$ = this.allAPIGames$.pipe(
            map((res) => {
                const allGenres: string[] = [];
                res.forEach((game) => {
                    allGenres.push(game.genre);
                });
                return [...new Set(allGenres)];
            }),
            shareReplay(1)
        );
    }

    public getAllUserGames(): Observable<Game[]> {
        return this.http.get<Game[]>(environment.baseURL + '/games/' + this.id);
    }

    public addGame(gameId: string) {
        return this.http.patch(environment.baseURL + '/games/add/' + this.id, { gameId });
    }

    public removeGame(gameId: string) {
        return this.http.patch(environment.baseURL + '/games/remove/' + this.id, { gameId });
    }

    public getGameById(params: { id: number }): Observable<GameDetails> {
        return this.http.get<GameDetails>('https://free-to-play-games-database.p.rapidapi.com/api/game', {
            params: new HttpParams().set('id', params.id)
        });
    }

    public createNewGame(body: any) {
        console.log('12');
        return this.http.post(environment.baseURL + '/games/create', body);
    }

    // public getGenres(): Observable<string[]> {
    //     return this.http.get<GameAPI[]>('https://free-to-play-games-database.p.rapidapi.com/api/games');
    // }
}
