import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/Classes';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  static load(url: string) {
    HttpService.getPosts(url).subscribe({
      next: data => {
        console.log(data);
        this.posts$.next(data);
      }
    })
  }

  static getPosts(): Observable<Post[]> {
    return this.posts$.asObservable();
  }
}
