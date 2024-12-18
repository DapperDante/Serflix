import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    _auth = inject(AuthService);
    constructor(private router: Router, private message: MessageService){}
    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        passwordUser: new FormControl('', [Validators.required, Validators.minLength(9)])
    })
    Login(): boolean{
        if(this.loginForm.invalid){
            this.message.add({severity: 'warn', detail: 'Email or passwrod incorrect'});
            return false;
        }
        this._auth.LoginWithUsername(this.loginForm.value.username!, this.loginForm.value.passwordUser!)
        .subscribe({
            next: (resp)=>{
                localStorage.setItem('idUser', resp.idUser);
                this.router.navigate(['profile']);
            }, 
            error: (err) =>{
                switch(err.status){
                    case 400:
                        this.message.add({severity: 'error', detail: "There isn't that username"})
                        break;
                    case 404:
                        this.message.add({severity: 'error', detail: 'Password incorrect'});
                        break;
                }
            }
        });
        return true;
    }
}
