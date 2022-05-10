import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { GamesService } from 'src/app/core/services/games.service';
import { GameAPI } from 'src/app/core/models/GameModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() gameDetails!: GameAPI;
    @Output() deletedGame = new EventEmitter<number>();

    constructor(private gamesService: GamesService, private _snackBar: MatSnackBar, private route: Router) {}

    ngOnInit(): void {
        return
    }

    public navigateToGamePage(name: string) {
        const path = name.toLocaleLowerCase().replace(/ /g, '-');
        this.route.navigate([`dashboard/games/${path}`], {
            queryParams: { id: this.gameDetails.id }
        });
    }

    public onAddToLibrary(id: string) {
        this.gamesService.addGame(id).subscribe(
            (data) => this._snackBar.open('Added'),
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }

    public onRemoveFromLibrary(id: any) {
        this.deletedGame.emit(id);
        this.gamesService.removeGame(id).subscribe(
            (data) => this._snackBar.open('removed'),
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }
}
