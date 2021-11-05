import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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

  //rating
  toggleButtonEnable(){
    const submit = document.querySelector('button#submit')
    submit?.attributes.removeNamedItem('disabled')
    console.log(submit?.attributes)
  }

  submitRate(){
    const rating = <any> document.getElementsByName('rate')
    
    for (let i = 0; i < rating.length; i++) {
      if(rating[i].checked==true){
        this.y=rating[i].value;
        console.log(rating[i].value)     
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
