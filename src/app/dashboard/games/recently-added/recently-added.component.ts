import { GameAPI } from 'src/app/core/models/GameModel';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
    _selectedGenre$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    selectedGenre$: Observable<string> = this._selectedGenre$.asObservable();

    filteredGames$: Observable<GameAPI[]>;
    genres$: Observable<string[]>;

    vm$: Observable<{ games: GameAPI[]; genres: string[] }>;

    constructor(private gamesService: GamesService, private route: Router) {}

    ngOnInit(): void {
        this.genres$ = this.gamesService.genres$;

        this.filteredGames$ = combineLatest([this.gamesService.allAPIGames$, this.selectedGenre$]).pipe(
            map(([games, selectedGenre]) => {
                return games.filter((game: GameAPI) => {
                    return selectedGenre ? game.genre == selectedGenre : true;
                });
            })
        );

        this.vm$ = combineLatest([this.filteredGames$, this.genres$]).pipe(
            map(([games, genres]) => {
                return { games, genres };
            })
        );
    }

    onGenreChange($event: Event): void {
        this._selectedGenre$.next(($event.target as HTMLSelectElement).value);
    }

    public navigateToGamePage(name: string, id: number) {
        const path = name.toLocaleLowerCase().replace(/ /g, '-');
        this.route.navigate([`dashboard/games/${path}`], {
            queryParams: { id: id }
        });
    }
}
