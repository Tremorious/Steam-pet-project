import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-free',
    template: '<button type="button">{{buttonText}}</button>',
    styleUrls: ['./button-free.component.scss']
})
export class ButtonFreeComponent implements OnInit {
    @Input() buttonText: string;
    constructor() {
        this.buttonText = 'Free';
    }

    ngOnInit(): void {}
}
