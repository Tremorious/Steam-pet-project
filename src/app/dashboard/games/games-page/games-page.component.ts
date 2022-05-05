import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-games-page',
    templateUrl: './games-page.component.html',
    styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {
    constructor() {}

    @HostBinding('class')
    hostClass = 'container';

    ngOnInit(): void {}
}
