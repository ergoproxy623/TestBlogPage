import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
       private http: HttpClient,
       private router: Router,
   ) {
   }

   private _api = {
       host: environment.api,
       auth: '/loginAdmin',
       resetPass: '/password/reset',
       updPass: '/updatePassword',
       user: '/user',
       video: '/video',
       video1: '/showVideo1',
       video2: '/showVideo2',
       all: '/allVideosAllUsers',
       preview: '/preview',
       image: '/image',
   };

   get api() {
       return this._api;
       console.log(this._api);
   }

// change password
   updPass( updPass: UpdPass ) {
       return this.http.post(
           `${ this.api.host }${ this.api.updPass }`,
           updPass,
       );
   }

   getBlogs() {
     return this.http.get(`${this._api.host}`)
   }
}
