import { Component, inject } from '@angular/core';
import { ProfileService } from '../layout/service/profile.service';
import { Profile } from '../layout/api/account';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  private _profile = inject(ProfileService);
  profile$!: Observable<Profile | undefined>;
  dataChartFavorite: any;
  dataChartOptions: any;
  ngOnInit(){
    this.profile$ = this._profile.profiles$.pipe(map((profiles)=>{
      const profile: Profile = profiles.find(profile=>profile.id==history.state.idProfile)!;
      this.dataChartFavorite = {
        labels: ['Movies', 'Series'],
        datasets: [
          {
            data: [profile?.favorite?.refDocMovies.length, profile?.favorite?.refDocSeries.length],
            backgroundColor: ['red', 'white']
          }
        ]
      }
      return profile;
    }),
  tap(console.log))
    this.dataChartOptions = {
      mantainAspectRatio: false
    }
  }
}
