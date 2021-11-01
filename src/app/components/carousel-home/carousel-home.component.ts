import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {
  cells:any;

	@ViewChild('myCarousel') myCarousel:any;
	@ViewChild('carouselUseCase') carouselUseCase:any;
	@ViewChild('carouselThumbsUseCase') carouselThumbsUseCase:any;

	public constructor() {
        this.cells = Array(20).fill(0, 20).map((x,i)=>i);
	}

    images = [
        {id:1, url:'https://www.google.com', path: '/assets/img/capos1.jpeg'},
        {id:2, url:'https://www.primevideo.com', path: '/assets/img/calops2.jpeg'},
        {id:3, url:'https://www.netflix.com', path: '/assets/img/calops3.jpeg'},
        {id:4, url:'https://www.crunchyroll.com', path: '/assets/img/calops4.jpeg'},
        {id:5, url:'https://gaming.amazon.com/home', path: '/assets/img/birb1.jpeg'},
        {id:6, url:'https://globoplay.globo.com', path: '/assets/img/dog1.jpeg'},
        {id:7, url:'https://www.alura.com.br', path: '/assets/img/dog2.jpeg'},
        {id:8, url:'https://www.disneyplus.com', path: '/assets/img/banana.jpg'},
        {id:9, url:'https://www.hbomax.com/br/pt', path: '/assets/img/maca.jpg'},
        {id:10, url:'https://www.starplus.com/pt-br',path: '/assets/img/naruto.jpg'}
    ];

    imagesForSlider = [
        {id:11, url:'https://newworldfans.com', path: '/assets/photo-1444065707204-12decac917e8.jfif',},
        {id:12, url:'https://www.youtube.com', path: '/assets/photo-1445452916036-9022dfd33aa8.jfif'},
        {id:13, url:'https://www.reddit.com', path: '/assets/photo-1443996104801-80c82e789b18.jfif'},
        {id:14, url:'https://www.twitch.tv', path: '/assets/photo-1505839673365-e3971f8d9184.jfif'},
        {id:15, url:'https://www.amazon.com.br', path: '/assets/photo-1545420333-23a22b18b8fa.jfif'}
    ];

    next() {
      this.myCarousel.next();
  }

  prev() {
      this.myCarousel.prev();
  }

  select(index:number) {
      this.myCarousel.select(index);
  }

  play() {
      this.myCarousel.play();
  }

  stop() {
      this.myCarousel.stop();
  }

  handleCarouselEvents(event: any) {
      console.log(event);
  }
  onSelect(){
    let result = this.images.map(({url})=> url)
    console.log(result);
    window.location.href = result[2];
}

  handleCarouselUseCaseEvents(event:any) {
      if (event.name === "transitionend") {
          this.carouselThumbsUseCase.select(this.carouselUseCase.slideCounter)
      }
  }

  ngOnInit(): void {
  }

}
