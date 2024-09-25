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
  dataChartFavorite: any
  ngOnInit(){
    // console.log(this._profile.uid, history.state.idProfile);
    this.profile$ = this._profile.profiles$.pipe(map((profiles)=>{
      return profiles.find(profile=>profile.id===history.state.idProfile)
    }))
  }
}
