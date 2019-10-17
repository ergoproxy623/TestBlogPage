import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blogs} from '../interface/blogs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(
       private http: HttpClient,
       private router: Router,
   ) {
   }

   private urlRoute = {
       posts: '/posts',
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

   private url = "http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/posts";

// change password



    getSmartphone(): Observable<HttpResponse<Blogs[]>> {
        return this.http.get<Blogs[]>(

            this.url, { observe: 'response' });
    }


}

