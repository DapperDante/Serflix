import { inject, Injectable } from '@angular/core';
import { profile, RickAndMortyCharacters } from '../api/account.api';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const PATH = environment._ApiDbProfiles;
const BASE_URL_IMAGE_PROFILES = environment._BaseUrlRickAndMorty;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);
  getProfiles(idUser: number):Observable<any>{
    return this.http.get<any>(`${PATH}/get/${idUser}`);
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
    return this.http.post<any>(`${PATH}/add`, profile);
  }
  getProfile(idUser:number | string, idProfile: number | string): Observable<profile>{
    return this.http.get<profile>(`${PATH}/get/${idUser}/${idProfile}`);
  }
}
