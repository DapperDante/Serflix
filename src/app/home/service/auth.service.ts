import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
const PATH_DB = environment._ApiDbUsers;
@Injectable({
  providedIn: 'any'
})
export class AuthService {
  private http = inject(HttpClient);
  constructor() { }
  RegisterNewUser(username: string, email: string, password: string):Observable<any>{
    const newUser = {
      username: username,
      email: email,
      password: password
    };
    return this.http.post<any>(`${PATH_DB}/add`, newUser);
  }
  LoginWithUsername(username: string, password: string):Observable<any>{
    const user = {
      username: username,
      password: password
    };
    return this.http.post<any>(`${PATH_DB}/verify`, user);
  }
}
