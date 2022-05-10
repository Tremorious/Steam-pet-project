import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { Friend } from '../../models/FriendModel';

@Injectable()
export class FriendsPageResolverService implements Resolve<Friend[]> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Friend[]> | Friend[] {
        return this.userService.users$;
    }
}
