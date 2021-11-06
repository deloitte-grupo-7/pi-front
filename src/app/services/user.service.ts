import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileEditForm } from '../models/UserForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: ProfileEditForm[] = [];

  private readonly url = 'https://pi-back7.herokuapp.com';

  constructor(private http: HttpClient) { }

  //Precisa dar um get no componente de usuário e no componente de pesquisa de usuário.
  getUser(){
    return this.http.get<ProfileEditForm[]>(`${this.url}/u/username`)
  }

}
