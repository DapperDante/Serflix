import { Component, inject } from '@angular/core';
import { ProfileService } from '../layout/service/profile.service';
import { Profile, RickAndMortyCharacters } from '../layout/api/account';
import { map, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  private _profile = inject(ProfileService);
  profile$!: Observable<Profile | undefined>;
  photos$!: Observable<RickAndMortyCharacters>;
  dataChartFavorite: any;
  dataChartOptions: any;
  selectPhotoProfile: boolean = false;
  constructor(private message: MessageService){}
  ngOnInit(){
    this.profile$ = this._profile.profiles$.pipe(map((profiles)=>{
      const profile: Profile = profiles.find(profile=>profile.id==history.state.idProfile)!;
      //If there aren't movies or series favorites in this profile, not intializated that variable for show pharagraph 'Not there movies or series'
      if(profile?.favorite?.refDocMovies.length || profile?.favorite?.refDocSeries.length){
        this.dataChartFavorite = {
          labels: ['Movies', 'Series'],
          datasets: [
            {
              data: [profile?.favorite?.refDocMovies.length, profile?.favorite?.refDocSeries.length],
              backgroundColor: ['red', 'white']
            }
          ]
        }
      }
      return profile;
    }))
    this.dataChartOptions = {
      mantainAspectRatio: false
    }
  }
  ViewPhotosForChange(){
    this.selectPhotoProfile = true;
    this.photos$ = this._profile.getAllPhotosForProfile();
  }
  ChangePhotoProfile(image: string){
    this._profile.UpdateImageOfProfile(image).then(()=>{
      this.message.add({severity: 'success', detail: 'Update image of profile'});
      this.selectPhotoProfile = false;
    })
  }
}
