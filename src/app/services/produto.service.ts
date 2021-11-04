import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = []
  private services: Produto [] = [];

  private readonly API = 'https://localhost:4200/produto';

  constructor(private http: HttpClient) { }

  getService() {
    return this.http.get<Produto[]>(this.API);
  }

  addService(p:Produto): void{}
}
