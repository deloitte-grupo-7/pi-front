import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mudar(){
    const form= document.querySelector("div.conteiner");
    const aviso= document.querySelector("div.aviso");

    form?.classList.toggle("sr-only");
    aviso?.classList.remove("sr-only");
  }
}
