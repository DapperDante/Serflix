import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentReference, Firestore, query, where,  } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ItemFavorite } from 'src/app/api/item-favorite';
import { environment } from 'src/environments/environment.development';

const PATH = environment._PathMovie;
@Injectable({
  providedIn: 'any'
})
export class FavoriteMoviesService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);
  private _uid!: string;
  constructor(private cookies: CookieService, private router: Router) {
    if(!cookies.check('uid'))
      router.navigate(['']);
    this._uid = cookies.get('uid');
   }
  AddMovieFavorite(id: number, title: string, poster_path: string, genres: number[], idProfile: number):Promise<DocumentReference<any>>{
    //is for remove the base url and can add in other service
    let newPosterPath = '/'+poster_path.split('/').at(-1)!;
    const obj: ItemFavorite = {
      title: title,
      idItem: id,
      poster_path: newPosterPath,
      genres: genres,
      idProfile: idProfile,
      uid: this._uid
    }
    return addDoc(this._collection, obj);
  }
  getMoviesOfProfile():Observable<ItemFavorite[]>{
    return collectionData(query(this._collection, where('uid','==',this._uid), where('idProfile','==',history.state.idProfile))) as Observable<ItemFavorite[]>
  }
}
