import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/GameModel';
import { GamesService } from 'src/app/services/games.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
    deletedGameId: number;

    displayedGames: Game[] = [];

    constructor(private gamesService: GamesService) {
        console.log(this.deletedGameId);
    }

    ngOnInit(): void {
        this.getAllUserGames();
    }

    public getAllUserGames() {
        this.gamesService.getAllUserGames().subscribe((data) => {
            this.displayedGames = data;
        });
    }
    public onRemoveFromLibrary($event: any) {
        if ($event) {
            this.displayedGames = this.displayedGames.filter((game) => {
                return game._id.indexOf($event) === -1;
            });
        }
    }
}
