import { MatSnackBar } from '@angular/material/snack-bar';
import { GamesService } from 'src/app/services/games.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
    @Input() gameDetails: any;
    @Input() componentPurpose: string = '';
    public showReadMoreButton = false;
    public textLimitsList = {
        wrappedText: 400,
        allText: -1
    };
    public buttonTextList = {
        wrapped: 'Read More',
        all: 'Hide'
    };

    public readMoreButtonText: string = this.buttonTextList.wrapped;
    public restriction: number = this.textLimitsList.wrappedText;

    constructor(private gamesService: GamesService, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {}

    public onAddToLibrary(id: number) {
        this.gamesService.addGame(id).subscribe(
            (data) => this._snackBar.open('Added'),
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }

    public onReadMore() {
        // Toggles text state
        this.restriction =
            this.restriction === this.textLimitsList.wrappedText
                ? this.textLimitsList.allText
                : this.textLimitsList.wrappedText;
        // Toggle button state
        this.readMoreButtonText =
            this.readMoreButtonText === this.buttonTextList.wrapped
                ? this.buttonTextList.all
                : this.buttonTextList.wrapped;

        console.log(this.restriction, this.readMoreButtonText);
    }

    public onRemoveFromLibrary(id: number) {
        this.gamesService.removeGame(id).subscribe(
            (data) => this._snackBar.open('removed'),
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }
}
