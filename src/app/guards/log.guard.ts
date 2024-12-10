import { CanActivateFn, Router } from '@angular/router';

export const isLogged: CanActivateFn = (route, state) => {
  const router = new Router();
  if(!localStorage.getItem('idUser')){
    router.navigate(['']);
    return false;
  }
  if(localStorage.getItem('idProfile')){
    router.navigate(['home']);
    return false;
  }
  return true;
};
export const isNotSelectedProfile: CanActivateFn = (route, state) => {
  if(localStorage.getItem('idUser')){
    new Router().navigate(['profile']);
    return false;
  }
  return true;
}
export const viewContent: CanActivateFn = (route, state) => {
  const router = new Router();
  if(!localStorage.getItem('idUser')){
    router.navigate(['']);
    return false;
  }
  if(!localStorage.getItem('idProfile')){
    router.navigate(['profile']);
    return false;
  }
  return true;
}
