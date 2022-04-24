import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
    games = [1, 2, 3];

    constructor() {}

    ngOnInit(): void {}
}
