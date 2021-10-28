import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  images = [
    {path: '/assets/img/infos.png'},
    {path: '/assets/img/perfilgh.png'},
    {path: '/assets/img/login.png'},
    {path: '/assets/img/banana.jpg'},
    {path: '/assets/img/chocolate.jpg'},
    {path: '/assets/img/maca.jpg'},
    {path: '/assets/img/pera.jpg'}
  ];

  imagesForSlider = [
    {path: '/assets/img/infos.png'},
    {path: '/assets/img/perfilgh.png'},
    {path: '/assets/img/login.png'},
    {path: '/assets/img/banana.jpg'},
    {path: '/assets/img/chocolate.jpg'},
    {path: '/assets/img/maca.jpg'},
    {path: '/assets/img/pera.jpg'}
  ];

  ngOnInit() {
  }
  
  handleCarouselEvents(event:any) {
    console.log(event);
  }


}

// exemplo de método
// @ViewChild('myCarousel', {static: false}) myCarousel;

// next() {
//     this.myCarousel.next();
// }
