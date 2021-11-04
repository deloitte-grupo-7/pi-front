import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = []
  private services: Produto [] = [];

  private readonly url = 'https://pi-back7.herokuapp.com';
  

  constructor(private http: HttpClient) { }

  getService() {
    return this.http.get<Produto[]>(this.url);
  }

  postService(newService:Produto){
    return this.http.post(`${this.url}/screate`, newService);
  }

}
