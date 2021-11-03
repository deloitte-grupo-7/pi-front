import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [
    {
      nome:"Banana",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:2,
      imagem: "assets/img/banana.jpg"
    },
    {
      nome:"Narutinho",
      descricao: "Naruto correndo atrás do sasuke por 9 temporadas",
      avaliacao:2,
      imagem: "assets/img/naruto.jpg"
    },
    {
      nome:"Calopsita",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:3,
      imagem: "assets/img/capos1.jpeg"
    },
    {
      nome:"Dog",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:4,
      imagem: "assets/img/dog1.jpeg"
    },
    {
      nome:"Pera",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:0,
      imagem: "assets/img/pera.jpg"
    },
    {
      nome:"Pera",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      imagem: "assets/img/pera.jpg"
    },
  ];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  starsB(n?:number){
    if(n==null){
      return new Array(0)
    }else{
      return new Array(n);
    }
  }

  starsW(n?:number){
    if(n==null){
      return new Array(5)
    }else{
      let valor= 5-n!;
      return new Array(valor);
    }
  }
  
  teste(event: any){
    console.log(event)
  }
}
