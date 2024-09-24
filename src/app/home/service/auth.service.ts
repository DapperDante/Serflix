import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service'
@Injectable({
  providedIn: 'any'
})
export class AuthService {
  constructor(private auth: Auth, private cookie: CookieService) { }
  async LoginWithEmailAndPassword(email: string, password: string):Promise<void>{
    return signInWithEmailAndPassword(this.auth, email, password).then((data)=>{this.cookie.set('uid', data.user.uid)})
  }
  async LoginWithGoogle():Promise<void>{
    return signInWithPopup(this.auth, new GoogleAuthProvider).then((data)=>{this.cookie.set('uid', data.user.uid)})
  }
  async RegisterWithEmailAndPassword(email: string, password: string):Promise<void>{
    return createUserWithEmailAndPassword(this.auth, email, password).then((data)=>{this.cookie.set('uid', data.user.uid)})
  }
}
