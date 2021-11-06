import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  y:number=0;

  constructor() { }

  ngOnInit(): void {
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

  teste(){
    alert("olá")
  }
}
