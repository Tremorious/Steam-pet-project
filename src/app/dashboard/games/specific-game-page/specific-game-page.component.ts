import { GameDetails } from './../../../core/models/GameDetailsModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './specific-game-page.component.html',
    styleUrls: ['./specific-game-page.component.scss']
})
export class SpecificGamePageComponent implements OnInit {
    gameDetails$: Observable<Data>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.gameDetails$ = this.route.data;
    }
}

// gameData: GameDetails;
// this.gameData = this.route.snapshot.data['gameData'];
