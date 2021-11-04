import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
