import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

import { BehaviorSubject, debounce, debounceTime, distinctUntilChanged, map, Observable, Subject } from 'rxjs';
import { Game } from 'src/app/models/GameModel';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
    public searchBarLabelName = 'Search Games';
    public searchbarPlaceholderName = 'Search Games';
    public gamesList: Game[] = [];
    private gameList$: any;
    public queryValue: any;
    public minPrice = 0;
    public maxPrice = 0;

    constructor(private gamesService: GamesService, private _snackBar: MatSnackBar) {
        this.queryValue = {
            priceQuery: null,
            tagQuery: {
                action: null,
                adventure: null,
                indie: null
            }
        };
    }
    ngOnInit(): void {
        this.gamesService.getAllGames().subscribe((data) => {
            this.gamesList = data;
        });
        this.gameList$ = this.gamesService.getAllGames();
        this.findMinMaxPrice$();
    }

    private findMinMaxPrice$() {
        this.gameList$
            .pipe(
                map((res: Game[]) => {
                    const arr: any[] = [];
                    res.forEach((game: Game) => {
                        arr.push(game.price);
                    });
                    return { max: Math.max(...arr), min: Math.min(...arr) };
                })
            )
            .subscribe((data: any) => {
                this.maxPrice = data.max;
                this.minPrice = data.min;
            });
    }
    public resetQueryValues() {
        this.queryValue = {
            priceQuery: null,
            tagQuery: {
                action: null,
                adventure: null,
                indie: null
            }
        };
    }
}
