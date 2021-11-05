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

  getService() {
    return this.http.get<Post[]>(`${this.url}/service`);
  }

  postService(newService:Post){
    return this.http.post(`${this.url}/screate`, newService);
  }
}
