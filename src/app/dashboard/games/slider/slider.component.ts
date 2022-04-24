import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class SliderComponent implements OnInit {
    selectedIndex = 0;
    private slideAnimationDuration: number = 7000;

    public gamesList: Game[] = [];
    private gameList$: Observable<Game[]> | undefined;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.autoSlide();

        this.gameList$ = this.gamesService.getAllGames();

        this.gameList$.subscribe((data) => {
            this.gamesList = data;
        });
    }

    autoSlide() {
        setInterval(() => {
            if (this.selectedIndex === this.gamesList.length - 1) {
                this.selectedIndex = 0;
            } else {
                this.selectedIndex++;
            }
        }, this.slideAnimationDuration);
    }

    selectImage(index: number): void {
        this.selectedIndex = index;
    }
}
