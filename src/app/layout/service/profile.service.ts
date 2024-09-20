import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, query, updateDoc, where,  } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Account, Profile, RickAndMortyCharacters } from '../api/account';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Auth, signOut } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const PATH = 'Profiles';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrlRickAndMorty = environment._BaseUrlRickAndMorty;
  //This variable is only use when adden new profile
  private account!: Account;
  private _uid!: string;
  private _profiles$ = new BehaviorSubject<Profile[]>([]);
  private _firebase = inject(Firestore);
  private _collectRef = collection(this._firebase, PATH);
  constructor(private cookie: CookieService, private auth: Auth, private http: HttpClient, private router: Router){
    this._uid = cookie.get('uid');
    (collectionData(query(this._collectRef, where('uid', '==', this.uid)), {idField: 'idRef'}) as Observable<Account[]>)
    .subscribe(
      (data)=>{
        this.account = data[0];
        //It's avoid many request, ever have info about profiles of this account in one variable
        this._profiles$.next(data[0].profiles);
    })
  }
  LogOut(): Promise<void>{
    return signOut(this.auth);
  }
  getAllPhotosForProfile(): Observable<RickAndMortyCharacters>{
    return this.http.get<RickAndMortyCharacters>(`${this.baseUrlRickAndMorty}/character`)
  }
  AddProfile(url: string, name: string){
    let lastIdProfile = this.account.profiles[this.account.profiles.length-1].id+1;
    this.account.profiles.push({id: lastIdProfile, name: name, url: url})
    return updateDoc(doc(this._firebase, `${PATH}/${this.account.idRef}`), {profiles: this.account.profiles});
  }
  //It's for give profiles when finish in store data
  get profiles$():Observable<Profile[]>{
    return this._profiles$.asObservable().pipe(tap(console.log));
  }
  get uid(){
    return this._uid;
  }
}
