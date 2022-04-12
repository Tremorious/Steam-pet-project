import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/GameModel';
import { GamesService } from 'src/app/services/games.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
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
}
