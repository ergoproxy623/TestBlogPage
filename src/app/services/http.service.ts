import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../interface/posts';
import {Comments} from '../interface/comments';
import {Users} from '../interface/users';

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
       users: '/users',
       comments: '/comments',
       db: '/db',

   };

   private url = "http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server";

// change password



    getPosts(): Observable<HttpResponse<Posts[]>> {
        return this.http.get<Posts[]>(

            `${this.url}${this.urlRoute.posts }`, { observe: 'response' });
    }


    getUsers(): Observable<HttpResponse<Users[]>> {
        return this.http.get<Users[]>(

            `${this.url}${this.urlRoute.users }`, { observe: 'response' });
    }


    getComments(): Observable<HttpResponse<Comments[]>> {
        return this.http.get<Comments[]>(

            `${this.url}${this.urlRoute.comments }`, { observe: 'response' });
    }


}

