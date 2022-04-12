import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
        trigger('displayAnimation', [
            transition('void=>*', [animate('0.5s', keyframes([style({ opacity: '0' }), style({ opacity: '1' })]))])
        ])
    ]
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
