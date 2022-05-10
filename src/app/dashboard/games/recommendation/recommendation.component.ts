import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameAPI } from 'src/app/core/models/GameModel';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.component.html',
    styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit, OnDestroy {
    gamesList: GameAPI[] = [];
    amountOfDisplayedCards = 3;
    sub: Subscription;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.sub = this.gamesService.allAPIGames$
            .pipe(
                map((res: GameAPI[]) => {
                    return this.getRandomItemsFromArray(res, this.amountOfDisplayedCards);
                })
            )
            .subscribe((data) => {
                this.gamesList = data;
            });
    }

    getRandomItemsFromArray(arr: GameAPI[], quantity: number): GameAPI[] {
        const newArr = [];
        for (let i = 0; i < quantity; i++) {
            newArr.push(arr[Math.floor(Math.random() * arr.length)]);
        }
        return newArr;
    }

    ngOnDestroy() {
        this.sub && this.sub.unsubscribe();
    }
}
