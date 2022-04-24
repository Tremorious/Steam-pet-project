import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/GameModel';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
    selector: 'app-library-page',
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
    displayedGames: Game[] = [];

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.getAllUserGames();
    }

    public getAllUserGames() {
        this.gamesService.getAllUserGames().subscribe((data) => {
            this.displayedGames = data;
        });
    }
    public onRemoveFromLibrary($event: number) {
        if ($event) {
            this.displayedGames = this.displayedGames.filter((game) => {
                return game._id.indexOf($event.toString()) === -1;
            });
        }
    }
}
