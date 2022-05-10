import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Friend } from 'src/app/core/models/FriendModel';
import { UserService } from 'src/app/core/services/user.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Observable, BehaviorSubject, concat, combineLatest, map, first, tap, take, Subscription } from 'rxjs';

@Component({
    selector: 'app-friends',
    templateUrl: './friends-page.component.html',
    styleUrls: ['./friends-page.component.scss'],
    animations: [
        trigger('friendsDisplayAnimation', [
            transition('void => *', [
                query('.friends__user-card', style({ opacity: 0 })),
                query('.friends__user-card', stagger('100ms', [animate('300ms', style({ opacity: 1 }))]))
            ])
        ])
    ]
})
export class FriendsPageComponent implements OnInit, OnDestroy {
    @HostBinding('class')
    hostClass = 'friends';
    private sub: Subscription;

    showLoader$ = this.loaderService.loadingState$;

    _filterField$ = new BehaviorSubject<string>('');
    filterField$ = this._filterField$.asObservable();

    usersList$: Observable<Friend[]>;

    constructor(
        private userService: UserService,
        private _snackBar: MatSnackBar,
        private loaderService: LoaderService
    ) {
        this.loaderService.showLoader();
    }

    ngOnInit(): void {
        this.usersList$ = combineLatest([this.userService.users$, this.filterField$]).pipe(
            tap((data) => {
                this.loaderService.hideLoader();
            }),
            map(([users, filterField]) => {
                return users.filter((item: Friend) => {
                    return filterField ? item.username.indexOf(filterField) !== -1 : true;
                });
            })
        );
    }

    onToggleFriendship(user: Friend) {
        this.loaderService.showLoader();
        const action$ = user.isFriend
            ? this.userService.removeFriend(user.username)
            : this.userService.addFriend(user.username);

        this.sub = action$
            .pipe(
                tap((data) => {
                    this.loaderService.hideLoader();
                }),
                take(1),
                map((res) => {
                    return res['message'];
                })
            )
            .subscribe((data) => {
                this._snackBar.open(data);
            });
    }

    setFilterField(value: string) {
        this._filterField$.next(value);
    }

    ngOnDestroy() {
        this.sub && this.sub.unsubscribe();
    }
}
