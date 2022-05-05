import { GameAPI } from 'src/app/core/models/GameModel';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { GamesService } from 'src/app/core/services/games.service';

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

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.genres$ = this.gamesService.getGenres();
        this.filteredGames$ = combineLatest([this.gamesService.getAllAPIGames(), this.selectedGenre$]).pipe(
            map(([games, selectedGenre]) => {
                return games.filter((game: GameAPI) => {
                    return selectedGenre ? game.genre == selectedGenre : true;
                });
            })
        );
    }

    onGenreChange($event: Event): void {
        this._selectedGenre$.next(($event.target as HTMLSelectElement).value);
    }
}
