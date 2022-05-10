import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'steamApp';
    showLoader$: Observable<boolean>;

    constructor(private loaderService: LoaderService) {
        this.showLoader$ = this.loaderService.loadingState$;
    }
}
