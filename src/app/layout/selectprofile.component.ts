import { Component, inject } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { RickAndMortyCharacters } from './api/account.api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-selectprofile',
  templateUrl: './selectprofile.component.html',
  styles: `
    .select-profile:hover{
      transition-duration: 200ms;
      transform: scale(1.1);
      box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);
    }
  `
})
export class SelectprofileComponent {
  private _profile = inject(ProfileService);
  profiles$!: Observable<any>;
  photos$!: Observable<RickAndMortyCharacters>;
  //Control view panel of edit
  addProfile: boolean = false;
  selectPhotoProfile: boolean = false;
  //Variables for new profile
  urlProfileSelected!: string;
  nameProfileSelected!: string;
  private idUser: number | undefined;
  constructor(private router: Router, private confirmationService: ConfirmationService, private message: MessageService){}
  ngOnInit(){
    this.idUser = Number(localStorage.getItem('idUser'));
    this.profiles$ = this._profile.getProfiles(this.idUser);
  }
  SelectProfile(id: number){
    localStorage.setItem('idProfile', id+"");
    this.router.navigate(['home']);
  }
  ViewPhotosForProfile(){
    this.selectPhotoProfile = true;
    //Avoid repeat the request when get all photos for view
    if(this.photos$)
      return;
    this.photos$ = this._profile.getAllPhotosForProfile();
  }
  //It's for change the photo when you choose one of them for new profile
  ChangePhotoProfile(url: string){
    this.urlProfileSelected = url;
    this.selectPhotoProfile = false;
  }
  CreateProfile(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to created?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.CreatingProfile();
        }
      });
    }
  //It's when send info to backend
  private CreatingProfile(){
    if(!this.urlProfileSelected || !this.nameProfileSelected){
      this.message.add({severity: 'warn', detail: 'Select one image to your profile'});
      return;
    }
    this._profile.AddProfile(Number(localStorage.getItem('idUser')), this.urlProfileSelected, this.nameProfileSelected)
    .subscribe((idProfile)=>{
      this.router.navigate(['home']);
      localStorage.setItem('idProfile', idProfile);
    })
  }
}
