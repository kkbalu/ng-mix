import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: {};
  myData$: Observable<Object[]>;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.myData$ = this.http
      .get('https://jsonplaceholder.typicode.com/users');
  }

  onUpdate(data: {}) {
    this.data = data;
  }
}
