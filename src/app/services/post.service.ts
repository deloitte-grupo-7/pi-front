import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = []
  private services: Post [] = [];

  private readonly url = 'https://pi-back7.herokuapp.com';
  
  constructor(private http: HttpClient) { }

  //Está pegando a lista de todos os usuários que prestam serviço (Fazer o get ao clicar em SERVIÇO).
  getService() {
    return this.http.get<Post[]>(`${this.url}/providers`);
  }

  //Postando o serviço // OBS: O USERNAME É UMA VARIÁVEL QUE MUDA DE ACORDO COM O USUÁRIO
  postService(newService:Post){
    return this.http.post(`${this.url}/u/username`, newService);
  }

  //Está pegando a lista de serviços de um usuário específico.
  getUser(){
    return this.http.get<Post[]>(`${this.url}/u/username/services`)
  }
}