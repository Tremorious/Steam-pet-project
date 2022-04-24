import { Friend } from './FriendModel';

export interface User {
    username: string;
    password: string;
    friends: Friend[];
}
