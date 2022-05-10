import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/models/GameModel';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
    selector: 'app-library-page',
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
    addGameForm = new FormGroup({
        name: new FormControl('', Validators['required']),
        tag: new FormControl('', Validators['required']),
        price: new FormControl('', Validators['required']),
        description: new FormControl('', Validators['required']),
        image: new FormControl('', Validators['required']),
        image_logo: new FormControl('', Validators['required']),
        image_small: new FormControl('', Validators['required'])
    });

    displayedGames: Game[] = [];
    displayedGames$: Observable<Game[]> | null;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.displayedGames$ = this.gamesService.getAllUserGames();
    }

    public onRemoveFromLibrary($event: number) {
        if ($event) {
            this.displayedGames = this.displayedGames.filter((game) => {
                return game._id.indexOf($event.toString()) === -1;
            });
        }
    }
    public onCreateNewGame() {
        if (this.addGameForm.invalid) {
            alert('no');
        }
        console.log(this.addGameForm.value);
        this.gamesService.createNewGame(this.addGameForm.value).subscribe((data) => {
            console.log(data);
        });
    }
}
