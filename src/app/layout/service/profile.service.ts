import { inject, Injectable } from '@angular/core';
import { Account, Profile, RickAndMortyCharacters } from '../api/account';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

const PATH = environment._ApiDbProfiles;
const BASE_URL_IMAGE_PROFILES = environment._BaseUrlRickAndMorty;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);
  constructor(private router: Router){
  }
  getAllProfiles(idUser: number):Observable<any>{
    return this.http.get<any>(`${PATH}/get-all-profiles/${idUser}`);
  }
  getAllPhotosForProfile(): Observable<RickAndMortyCharacters>{
    return this.http.get<RickAndMortyCharacters>(`${BASE_URL_IMAGE_PROFILES}/character`)
  }
  AddProfile(idUser: number ,url: string, name: string): Observable<any>{
    const profile = {
      user_id: idUser,
      name: name,
      img: url
    }
    return this.http.post<any>(`${PATH}/add-profile`, profile);
  }
  getInfoProfile(idUser: number, idProfile: number): Observable<any>{
    return this.http.get<any>(`${PATH}/get-info-profile/${idUser}/${idProfile}`).pipe(tap(console.log));
  }
}
