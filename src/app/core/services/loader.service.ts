import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _loadingState$ = new BehaviorSubject<boolean>(false);
    loadingState$ = this._loadingState$.asObservable();

    showLoader() {
        this._loadingState$.next(true);
    }
    hideLoader() {
        this._loadingState$.next(false);
    }
}
