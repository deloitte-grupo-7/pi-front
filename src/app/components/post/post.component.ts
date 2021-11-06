import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  
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
      id:"5",
      title:"Pera",
      description: "Aula de  violão para crianças de 10 anos em 3 meses",
      rating:0,
      imgUrl: "assets/img/pera.jpg"
    },
  ];

  constructor(private ps: PostService) { }

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

  teste(){
    alert("olá")
  }

}
