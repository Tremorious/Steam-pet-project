import { trigger, transition, style, stagger, animate, query } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-games-page',
    templateUrl: './games-page.component.html',
    styleUrls: ['./games-page.component.scss'],
    animations: [
        trigger('GamePageDisplayAnimation', [
            transition('void => *', [
                query('.animation', style({ opacity: 0 })),
                query('.animation', stagger('600ms', [animate('800ms', style({ opacity: 1 }))]))
            ])
        ])
    ]
})
export class GamesPageComponent {
    @HostBinding('class')
    hostClass = 'container';

    @HostBinding('@GamePageDisplayAnimation') get GamePageDisplayAnimation() {
        return;
    }
}
