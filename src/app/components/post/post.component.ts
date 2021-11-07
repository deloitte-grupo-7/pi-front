import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Classes';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  starsB(n?:number){
    return new Array(n ? n : 0);
  }

  starsW(n?:number){
    return new Array(n ? 5 - n : 5);
  }

  teste(){
    this.router.navigateByUrl('/user')
  }

}
