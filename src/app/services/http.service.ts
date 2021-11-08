import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalContent, Post } from '../models/Classes';
import { SignInForm, SignUpForm, User } from '../models/Classes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private static readonly apiURL: string = 'https://pi-back7.herokuapp.com';
  static http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  static localContent: LocalContent;

  static signUpRequest(form: SignUpForm): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, form);
  }

  static checkUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiURL}/api/check/username`, { params: { [username]: username } })
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

  static refreshToken(): Observable<any> {
    console.log(AuthService.load().refresh_token);
    const options = { headers: { Authorization: AuthService.load().refresh_token,
                                  'Access-Control-Allow-Origin': '*' }};
    console.log(options);
    return this.http.get(`${this.apiURL}/token-refresh`, options);
  }

  static searchPost(tag: string): Observable<any> {
    return this.http.get<Post[]>(this.apiURL, { params: { [tag]: tag }});
  }

  static postPost(post: Post): Observable<any> {
    return this.http.post(`${this.apiURL}/u/${AuthService.localContent$.value.username}/services`, post);
  }
}
