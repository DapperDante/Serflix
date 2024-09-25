import { inject, Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore, where, query } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, DocumentReference } from '@firebase/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ItemFavorite } from 'src/app/api/item-favorite';
const PATH:string = 'SerieFavorite';
@Injectable({
  providedIn: 'root'
})
export class FavoriteSeriesService {
  private _firebase = inject(Firestore);
  private _collection = collection(this._firebase, PATH);
  private _uid!: string;
  constructor(private cookies: CookieService, private router: Router) { 
    if(!cookies.check('uid'))
      router.navigate(['']);
    this._uid = cookies.get('uid');
  }
  AddSerieFavorite(id: number, title: string, poster_path: string, genres: number[]):Promise<DocumentReference<any>>{
    const obj: ItemFavorite = {
      title: title,
      idItem: id,
      poster_path: poster_path,
      genres: genres,
      idProfile: history.state.idProfile,
      uid: this._uid
    }
    return addDoc(this._collection, obj);
  }
  getMoviesOfProfile():Observable<ItemFavorite[]>{
    return collectionData(query(this._collection, where('uid','==',this._uid), where('idProfile','==',history.state.idProfile))) as Observable<ItemFavorite[]>
  }
}
