import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Friend } from 'src/app/core/models/FriendModel';
import { UserService } from 'src/app/core/services/user.service';

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
export class FriendsPageComponent implements OnInit {
    searchbarPlaceholderName = 'Search Friends';
    searchBarLabelName = 'Search Friends';

    userList: Friend[] = [];
    filteredUsers: Friend[] = [];

    constructor(private userService: UserService, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.getAllUsers();
    }

    private getAllUsers(): void {
        this.userService.getAllUsers().subscribe((data) => {
            this.userList = data;
            this.filteredUsers = this.userList;
        });
    }
    public filterUsers(filterField: string) {
        this.filteredUsers = this.userList.filter((item: Friend) => {
            return item.username.indexOf(filterField) !== -1;
        });
    }

    public onAddFrined(user: Friend) {
        this.userService.addFriend(user.username).subscribe(
            (data) => {
                this._snackBar.open('Added in your friendlist');
            },
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
        let index = this.filteredUsers.findIndex((friend) => friend.username === user.username);
        this.filteredUsers[index].isFriend = !this.filteredUsers[index].isFriend;
    }

    public onRemoveFrined(user: Friend) {
        this.userService.removeFriend(user.username).subscribe(
            (data) => {
                this._snackBar.open('Removed from your friendlist');
            },
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
        let index = this.filteredUsers.findIndex((friend) => friend.username === user.username);
        this.filteredUsers[index].isFriend = !this.filteredUsers[index].isFriend;
    }
}
