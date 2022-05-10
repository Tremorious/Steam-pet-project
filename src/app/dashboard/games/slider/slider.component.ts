import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/GameModel';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('expandedPanel', [
            state('void', style({ opacity: 0 })),
            state('*', style({ opacity: 1 })),
            transition('void <=> *', animate('0.5s'))
        ])
    ]
})
export class SliderComponent implements OnInit, OnDestroy {
    public selectedIndex = 0;
    private slideAnimationDuration: number = 7000;

    public gamesList: Game[] = [];
    private gamesListSubscription$: Subscription;

    constructor(private gamesService: GamesService) {}

    private arrSort<T extends Game[]>(arr: T): T {
        return arr.sort(() => Math.random() - 0.5);
    }

    ngOnInit(): void {
        this.autoSlide();

        this.gamesListSubscription$ = this.gamesService.games$.subscribe((data) => {
            this.gamesList = this.arrSort(data);
        });
    }

    private autoSlide() {
        setInterval(() => {
            if (this.selectedIndex === this.gamesList.length - 1) {
                this.selectedIndex = 0;
            } else {
                this.selectedIndex++;
            }
        }, this.slideAnimationDuration);
    }

    public selectImage(index: number): void {
        this.selectedIndex = index;
    }

    ngOnDestroy() {
        this.gamesListSubscription$ && this.gamesListSubscription$.unsubscribe();
    }
}
