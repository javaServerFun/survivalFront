import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Message {
  content: string;
  author: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = 'xyz';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/time', {responseType: 'text'}).subscribe(data => {
      this.time = data;
    });

  }
}
