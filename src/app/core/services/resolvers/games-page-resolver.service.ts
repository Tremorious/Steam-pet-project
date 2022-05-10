import { catchError, forkJoin, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GamesService } from '../games.service';

@Injectable()
export class GamesPageResolverService implements Resolve<any> {
    constructor(private gamesService: GamesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        return forkJoin([this.gamesService.allAPIGames$, this.gamesService.games$, this.gamesService.genres$]);
    }
}
