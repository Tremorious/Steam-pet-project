import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user.service';
import { UserCredentials } from 'src/app/core/models/UserCredentialsModel';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
    @HostBinding('class')
    hostClass = 'profile';

    profileForm: FormGroup = new FormGroup({});
    userCredentials: Observable<UserCredentials>;

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

        this.userCredentials = this.userService.getUserCredentials();
    }

    onUpdateProfileInfo() {
        if (!this.profileForm.valid) {
            return;
        }

        this.userService.updateUserCredentrials(this.profileForm.value).subscribe(
            () => {
                this._snackBar.open('Updated successfully');
            },
            (err) => {
                console.log(`${err}`);
            }
        );
    }

    ngOnDestroy(): void {
        console.log('destr profile-page component')
    }
}
