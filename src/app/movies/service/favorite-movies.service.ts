import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'any'
})
export class FavoriteMoviesService {
  _firestore = inject(Firestore);
  constructor() { }
  AddMovieFavorite(){

  }
  getMoviesOfProfile(){
    
  }
}
