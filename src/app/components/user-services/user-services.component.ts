import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Classes';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.scss']
})
export class UserServicesComponent implements OnInit {
  y:number=0;
  list5:Array<any>= new Array(5);

  posts: Post[] = [
    {
      id:"1",
      title:"Banana",
      description: "Aula de  violão para crianças de 10 anos em 3 meses",
      rating:2,
      imgUrl: "assets/img/banana.jpg"
    },
    {
      id:"2",
      title:"Narutinho",
      description: "Naruto correndo atrás do sasuke por 9 temporadas",
      rating:2,
      imgUrl: "assets/img/naruto.jpg"
    },
    {
      id:"3",
      title:"Calopsita",
      description: "Aula de  violão para crianças de 10 anos em 3 meses",
      rating:3,
      imgUrl: "assets/img/capos1.jpeg"
    },
    {
      id:"4",
      title:"Dog",
      description: "Aula de  violão para crianças de 10 anos em 3 meses",
      rating:4,
      imgUrl: "assets/img/dog1.jpeg"
    },
    {
      id:"80",
      title:"Pera",
      description: "Aula de  violão para crianças de 10 anos em 3 meses",
      rating:0,
      imgUrl: "assets/img/pera.jpg"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  //deletar
  mostrar: boolean = false;

  prodSelect?:string;

  toggle () {
    this.mostrar = !this.mostrar;
  }

  starsB(n?:number) {
    return new Array(n ? n : 0);
  }

  starsW(n?:number){
    return new Array(n ? 5 - n : 5);
  }

  onDelete(id?: string){
    if(id){
      this.prodSelect=id;
    } 
  }

  onConfirmar(){
    console.log(this.prodSelect);
    this.toggle();
  }

}
