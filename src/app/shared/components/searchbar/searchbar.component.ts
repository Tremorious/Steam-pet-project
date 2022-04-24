import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbarComponent implements OnInit {
    @Input() searchbarLabel: string = '';
    @Input() searchbarPlaceholder: string = '';

    @Output() filterName: any = new EventEmitter<string>();

    inputData: string = '';
    constructor() {}

    ngOnInit(): void {}
    emitFilterValue($event: any) {
        this.filterName.emit($event.target.value);
    }
}
