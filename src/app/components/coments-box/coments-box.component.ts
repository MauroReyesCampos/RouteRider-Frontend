import { Component, OnInit } from '@angular/core';

interface Comment {
  author: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-coments-box',
  templateUrl: './coments-box.component.html',
  styleUrls: ['./coments-box.component.css']
})
export class ComentsBoxComponent implements OnInit{
  loggedinUserName!: string | null;
  today: Date = new Date();

  comments: Comment[] = [];
  newComment: Comment = { author: '', message: '', date: this.today.toLocaleString() };

  ngOnInit() {
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if(!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    };
  }

  addComment() {
    if (this.newComment.message.trim() !== '') {
      this.comments.push({ ...this.newComment });
      this.newComment.author = '';
      this.newComment.message = '';
    }
  }


}
