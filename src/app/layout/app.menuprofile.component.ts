import { Component, ElementRef, inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LayoutService } from './service/app.layout.service';
import { ProfileService } from './service/profile.service';
import { map, Observable } from 'rxjs';
import { Profile } from './api/account';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-profile',
    templateUrl: './app.menuprofile.component.html',
    animations: [
        trigger('menu', [
            transition('void => inline', [
                style({ height: 0 }),
                animate(
                    '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                    style({ opacity: 1, height: '*' })
                ),
            ]),
            transition('inline => void', [
                animate(
                    '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                    style({ opacity: 0, height: '0' })
                ),
            ]),
            transition('void => overlay', [
                style({ opacity: 0, transform: 'scaleY(0.8)' }),
                animate('.12s cubic-bezier(0, 0, 0.2, 1)'),
            ]),
            transition('overlay => void', [
                animate('.1s linear', style({ opacity: 0 })),
            ]),
        ]),
    ],
})
export class AppMenuProfileComponent {
    _profile = inject(ProfileService);
    profile$!: Observable<Profile | undefined>;
    private idProfile: number | undefined;
    private idUser: number | undefined;
    constructor(public layoutService: LayoutService, public el: ElementRef, private router: Router) {}
    ngOnInit(){
        this.idProfile = Number(localStorage.getItem('idProfile'));
        this.idUser = Number(localStorage.getItem('idUser'));
        this.profile$ = this._profile.getAllProfiles(this.idUser)
        .pipe(
            map((data: any)=>
                data.find((profile:any)=>
                    profile.id===this.idProfile
            ))
        );
    }
    LogOut(){
        localStorage.removeItem('idUser');
        localStorage.removeItem('idProfile');
        this.router.navigate(['']);
    }
    toggleMenu() {
        this.layoutService.onMenuProfileToggle();
    }
    ChangeProfile(){
        localStorage.removeItem('idProfile');
        this.router.navigate(['profile']);
    }
    get isHorizontal() {
        return (
            this.layoutService.isHorizontal() && this.layoutService.isDesktop()
        );
    }

    get menuProfileActive(): boolean {
        return this.layoutService.state.menuProfileActive;
    }

    get menuProfilePosition(): string {
        return this.layoutService.config().menuProfilePosition;
    }

    get isTooltipDisabled(): boolean {
        return !this.layoutService.isSlim();
    }
}
