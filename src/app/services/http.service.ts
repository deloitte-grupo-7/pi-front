import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Classes';
import { SignInForm, SignUpForm, User } from '../models/Classes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private static readonly apiURL: string = 'https://pi-back7.herokuapp.com';
  static http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

  static signUpRequest(form: SignUpForm): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, form);
  }

  static signInRequest(form: SignInForm): Observable<any> {
    return this.http.post(`${this.apiURL}/signin`, form);
  }

  static getUser(username: string): Observable<any> {
    console.log(username);
    return this.http.get<User>(`${this.apiURL}/u/${username}/profile`);
  }

  static getPost(id: string): Observable<any> {
    return this.http.get<Post>(`${this.apiURL}/services/${id}`)
  }
  
  static getPosts(username: string): Observable<any> {
    return this.http.get<Post[]>(`${this.apiURL}/u/${username}/services`);
  }

  static searchPost(tag: string): Observable<any> {
    return this.http.get<Post[]>(this.apiURL, { params: { [tag]: tag }});
  }

  static postPost(post: Post): Observable<any> {
    return this.http.post(`${this.apiURL}/u/${AuthService.localContent$.value.username}/services`, post);
  }

  static postImg(newService: Post): Observable <Post>{
    let token = window.sessionStorage.getItem('token');
    return this.http.post<Post>(this.apiURL + 'u/provider', 
    newService, {headers: {Authorization: `${token}`}})
  }

  
  static getImg(): Observable<Post[]>{
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Post[]>(this.apiURL + 'u/service', 
    {headers: {Authorization: `${token}`}})
  }
}
