import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registerationUserForm: FormGroup = new FormGroup({});
    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.registerationUserForm = this.formBuilder.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
        });
    }
    registeration() {
        if (this.registerationUserForm.invalid) {
            return;
        }

        this.authService.registeration(this.registerationUserForm.value).subscribe(
            (data) => {
                this._snackBar.open('Registered successfully!');
                this.router.navigate(['auth/login']);
            },
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }
}
