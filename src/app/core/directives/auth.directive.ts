import { AuthService } from './../services/auth.service';
import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnDestroy } from '@angular/core';
import { tap, Subscription } from 'rxjs';

@Directive({
    selector: '[appAuth]'
})
export class AuthDirective implements OnInit, OnDestroy {
    sub: Subscription;

    constructor(
        private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.sub = this.authService.isLoggedIn$.subscribe((isLoggedIn$) => {
            if (isLoggedIn$) {
                console.log('if');
                this.vcRef.createEmbeddedView(this.templateRef);
            } else {
                console.log('else');
                this.vcRef.clear();
            }
        });
    }
    ngOnDestroy() {
        this.sub && this.sub.unsubscribe();
    }
}
