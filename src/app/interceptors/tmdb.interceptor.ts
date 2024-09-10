import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes(environment._ApiUrl)){
    const TOKEN = environment._TokenTmdb;
    const reqWithToken = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${TOKEN}`
      }
    })
    return next(reqWithToken);
  }
  return next(req);
};
