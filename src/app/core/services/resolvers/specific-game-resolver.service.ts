import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GamesService } from '../games.service';
import { GameDetails } from '../../models/GameDetailsModel';

@Injectable()
export class SpecificGameResolverService implements Resolve<GameDetails> {
    constructor(private gamesService: GamesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GameDetails> | GameDetails {
        return this.gamesService.getGameById({ id: route.queryParams['id'] });
    }
}
