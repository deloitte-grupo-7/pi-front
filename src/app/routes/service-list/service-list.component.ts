import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceList implements OnInit {
  
  private services!: Produto[];

  constructor( private ps: ProdutoService) { 
     this.ps.getService().subscribe(
      {
        next: services => {
          this.services = services;
        },
        error: err => console.error(err)  
      }
    );
  }

  // onFormSubmit(ev: Event): void {
  //   ev.preventDefault();
  //   const form: Map<string, any> = new Map();
  // }

  ngOnInit(): void {
  }
}
