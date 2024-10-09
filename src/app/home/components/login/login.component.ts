import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AuthErrorCodes } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    _auth = inject(AuthService);
    constructor(private router: Router, private message: MessageService){}
    loginForm = new FormGroup({
        emailUser: new FormControl('', [Validators.required, Validators.email]),
        passwordUser: new FormControl('', [Validators.required, Validators.minLength(9)])
    })
    Login(): boolean{
        if(this.loginForm.invalid)
            return false;
        this._auth.LoginWithEmailAndPassword(this.loginForm.value.emailUser!, this.loginForm.value.passwordUser!)
        .then(()=>{
            this.router.navigate(['profile'])
        })
        .catch((err)=>{
            switch(err.code){
                case AuthErrorCodes.INVALID_PASSWORD:
                   this.message.add({severity: 'error', detail: 'Password incorrect'}) 
                break;
                case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
                    this.message.add({severity: 'warn', detail: 'Email or password incorrect'})
                break;
            }
            return false;
        })
        return true;
    }
    LoginWithGoogle(){
        this._auth.LoginWithGoogle()
        .then(()=>this.router.navigate(['profile']))
        .catch((err)=>{
            switch(err.code){
                case AuthErrorCodes.POPUP_CLOSED_BY_USER:
                    this.message.add({severity: 'error', detail: 'An error has ocurred'});
                    break;
            }
        })
    }
}
