import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap, map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
    profileForm: FormGroup = new FormGroup({});
    userProfileInfo$: Observable<any> = new Observable();

    constructor(private formBuilder: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.initProfileForm();
    }

    initProfileForm() {
        this.profileForm = this.formBuilder.group({
            username: new FormControl(``, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
            email: new FormControl(``, [Validators.email]),
            age: new FormControl(``, [Validators.min(18), Validators.max(100)])
        });

        this.userProfileInfo$ = this.userService.getUserCredentials();

        this.userProfileInfo$.subscribe((data) => {
            this.profileForm.setValue({
                username: data.username,
                email: data.email,
                age: data.age
            });
        });
    }

    onUpdateProfileInfo() {
        if (!this.profileForm.valid) {
            return;
        }

        this.userService.updateUserCredentrials(this.profileForm.value).subscribe(
            (data) => {
                this._snackBar.open('Updated successfuly');
            },
            (err) => {
                console.log('Something went wrong');
            }
        );
    }
}
