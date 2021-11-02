import { Component, OnInit } from '@angular/core';
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
      nome:"Aula de violão",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:2,
      // imagem: "assets//img//banana.jpg"
    },
    {
      nome:"Aula de violão",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:2,
    },
    {
      nome:"Aula de violão",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:3,
    },
    {
      nome:"Aula de violão",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:4,
    },
    {
      nome:"Aula de violão",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:4,
    },
  ];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

}
