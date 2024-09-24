import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentReference, Firestore, query, where,  } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MovieFavorite } from '../api/movie-favorite';
import { Router } from '@angular/router';

const PATH = 'MovieFavorite';
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
  AddMovieFavorite(id: number, title: string, image: string, genres: number[]):Promise<DocumentReference<any>>{
    console.log(history.state.idProfile);
    const obj: MovieFavorite = {
      title: title,
      idItem: id,
      poster_path: image,
      genres: genres,
      idProfile: history.state.idProfile,
      uid: this._uid
    }
    return addDoc(this._collection, obj);
  }
  getMoviesOfProfile():Observable<MovieFavorite[]>{
    return collectionData(query(this._collection, where('uid','==',this._uid), where('idProfile','==',history.state.idProfile))) as Observable<MovieFavorite[]>
  }
}
