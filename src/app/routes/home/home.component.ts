import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    HttpService.refreshToken().subscribe(
      {
        next: (data: any) => console.log(data),
        error: (err: any) => console.log(err)
      });
  }

}
