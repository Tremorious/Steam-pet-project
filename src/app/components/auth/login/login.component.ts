import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginUserForm: FormGroup = new FormGroup({});
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.loginUserForm = this.formBuilder.group({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }
    login() {
        if (this.loginUserForm.invalid) {
            return;
        }

        this.authService.login(this.loginUserForm.value).subscribe(
            (data) => {
                this.router.navigate(['']);
            },
            (err) => {
                this._snackBar.open(err.error.message);
            }
        );
    }
}
