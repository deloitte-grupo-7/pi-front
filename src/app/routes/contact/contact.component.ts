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
    const formulario = document.querySelector('div.form')
    const aviso = document.querySelector('div.aviso')

    formulario?.classList.toggle('sr-only')
    aviso?.classList.toggle('sr-only')
  }
}
