import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  private _auth = inject(AuthService);
  errorCode: any;
  constructor(private router: Router, private message: MessageService){}
  registerForm = new FormGroup({
    nameUser: new FormControl('', [Validators.required, Validators.minLength(10)]),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    passwordUser: new FormControl('', [Validators.required, Validators.minLength(9)])
  })
  Register():boolean{
    if(this.registerForm.invalid){
      this.message.add({severity: 'warn', detail: 'Email or password incorrect'})
      return false;
    }
    this._auth.RegisterNewUser(this.registerForm.value.nameUser!, this.registerForm.value.emailUser!, this.registerForm.value.passwordUser!)
    .subscribe({
      next: (resp)=>{
        console.log(resp)
        this.router.navigate(['profile'], {state: {idUser: resp.idUser}});
      },
      error: (err)=>{
        switch(err.status){
          case 409:
            this.message.add({severity:'error', detail:'Email or username in use'});
          break;
          case 400: 
          this.message.add({severity: 'error', detail: 'An error has ocurred'});
          break;
        }
      }
    });
    // this._auth.RegisterWithEmailAndPassword(this.registerForm.value.emailUser!, this.registerForm.value.nameUser!)
    // .then((data)=>{
    //   this.router.navigate(['profile']);
    // })
    // .catch((err)=>{
    //   switch(err.code){
    //     case AuthErrorCodes.EMAIL_EXISTS: 
    //     this.message.add({severity: 'error', detail: 'Email already in use'})
    //     break;
    //   }
    // })
    return true;
  }
}
