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
  topic = 'java';
  messages = Array<Message>();
  newMessage:Message = {author: "", content: ""};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/time', {responseType: 'text'}).subscribe(data => {
      this.time = data;
    });
    this.reload();
  }

  changeTopic( name ) {
    this.topic = name;
    this.reload();
  }

  reload( ) {
     this.http.get('/api/messages/'+this.topic).subscribe((data:Array<Message>) => {
      this.messages = data;
    });
  }

  send() {
    this.http.post('/api/messages/'+this.topic, this.newMessage).subscribe((data:Array<Message>) => {
      this.messages = data;
      this.newMessage.content = '';
    });
  }
}
