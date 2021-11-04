import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  y:number=0;
  list5:Array<any>= new Array(5);

  produtos: Produto[] = [
    {
      id:"1",
      nome:"Banana",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:2,
      imagem: "assets/img/banana.jpg"
    },
    {
      id:"2",
      nome:"Narutinho",
      descricao: "Naruto correndo atrás do sasuke por 9 temporadas",
      avaliacao:2,
      imagem: "assets/img/naruto.jpg"
    },
    {
      id:"3",
      nome:"Calopsita",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:3,
      imagem: "assets/img/capos1.jpeg"
    },
    {
      id:"4",
      nome:"Dog",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:4,
      imagem: "assets/img/dog1.jpeg"
    },
    {
      id:"5",
      nome:"Pera",
      descricao: "Aula de  violão para crianças de 10 anos em 3 meses",
      avaliacao:0,
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

  //avaliacao
  toggleButtonEnable(){
    const submit = document.querySelector('button#submit')
    submit?.attributes.removeNamedItem('disabled')
    console.log(submit?.attributes)
  }

  submitRate(){
    const avaliacao = <any> document.getElementsByName('rate')
    
    for (let i = 0; i < avaliacao.length; i++) {
      if(avaliacao[i].checked==true){
        this.y=avaliacao[i].value;
        console.log(avaliacao[i].value)     
      }
    }
    
    this.switchRateVisibility()
  }

  switchRateVisibility(){
    const star_selection = document.querySelector('div.star-selection')
    const thanks = document.querySelector('div.thanks')

    star_selection?.classList.toggle('sr-only')
    thanks?.classList.toggle('sr-only')
  }

  concat(a:any, b:any):string{
    return a+b;
  }

  //deletar
  mostrar: boolean = false;

  prodSelect?:string;

  toggle () {
    this.mostrar = !this.mostrar;
  }

  onDelete(id?:string){
    //if(id){
      this.prodSelect=id;
    //} 
  }

  onConfirmar(){
    console.log(this.prodSelect);
    this.toggle();
  }



}
