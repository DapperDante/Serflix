import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, query, updateDoc, where, addDoc} from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Account, Profile, RickAndMortyCharacters } from '../api/account';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Auth, signOut } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

const PATH = environment._PathProfile;

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
    //This service need to it
    if(!cookie.check('uid'))
      this.LogOut().then(()=>router.navigate(['']));
    this._uid = cookie.get('uid');
    (collectionData(query(this._collectRef, where('uid', '==', this.uid)), {idField: 'idRef'}) as Observable<Account[]>)
    .subscribe(
      (data)=>{
        //If this account is new and when you add new profile, so the created the doc in firebase
        if(data.length){
          this.account = data[0];
          //It's avoid many request, ever have info about profiles of this account in one variable
          this._profiles$.next(data[0]?.profiles);
        }
    })
  }
  getAllPhotosForProfile(): Observable<RickAndMortyCharacters>{
    return this.http.get<RickAndMortyCharacters>(`${this.baseUrlRickAndMorty}/character`)
  }
  //Return id of profile when you can access, you put in state by navigate router
  async AddProfile(url: string, name: string): Promise<number>{
    //If this account is new, so initializated in empty variables base for be used
    if(!this.account){
      let profiles: Profile[] = [{id: 1, name: name, url: url, favorite: {refDocMovies: [], refDocSeries: []}}]
      this.account = {uid: this.uid, profiles: profiles}
      return addDoc(this._collectRef, this.account).then((data)=>{
        this.account.idRef = data.id;
        return profiles[0].id;
      })
    }else{
      //This code is demo because not found a free id of all profiles of this account
      let lastIdProfile = this.account.profiles[this.account.profiles.length-1].id+1;
      this.account.profiles.push({id: lastIdProfile, name: name, url: url, favorite: {refDocMovies: [], refDocSeries: []}});
      return updateDoc(doc(this._firebase, `${PATH}/${this.account.idRef}`), {profiles: this.account.profiles}).then(()=>{
        return lastIdProfile;
      })
    }
  }
  UpdateImageOfProfile(url: string):Promise<void>{
    this.account.profiles.find((item)=>item.id===history.state.idProfile)!.url = url;
    return updateDoc(doc(this._firebase, `${PATH}/${this.account.idRef}`), {profiles: this.account.profiles})
  }
  //This method is for match the movie or serie favorite with the doc of profile, so when you deleate a profile you delete all movies or series favorites
  UpdateProfileWithNewItemFavorite(refDoc: string, typeFavorite: 'refDocMovies' | 'refDocSeries'):Promise<void>{
    this.account.profiles.find((item)=>item.id===history.state.idProfile)?.favorite[typeFavorite].push(refDoc);
    return updateDoc(doc(this._firebase, `${PATH}/${this.account.idRef}`), {profiles: this.account.profiles})
  }
  LogOut(): Promise<void>{
    return signOut(this.auth);
  }
  //It's for give profiles when finish in store data
  get profiles$():Observable<Profile[]>{
    return this._profiles$.asObservable();
  }
  get uid(){
    return this._uid;
  }
}
