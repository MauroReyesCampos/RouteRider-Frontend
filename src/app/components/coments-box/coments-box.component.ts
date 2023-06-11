import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentservicesService } from 'src/app/services/commentservices.service'

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
export class ComentsBoxComponent implements OnDestroy {
  loggedinUserName!: string | null;
  dataDate!: Date;
  getSharedIndex!: number;
  private indexSubscription!: Subscription;
  commentData!: any;
  userFullname!: string;
  userComment!: string;
  commentDate!: string;

  constructor(private commentServices: CommentservicesService) {
    this.indexSubscription = this.commentServices.getSharedIndex().subscribe((index: any) => {
      this.getSharedIndex = index;
    })
  }

  // comments: Comment[] = [];
  // newComment: Comment = { author: '', message: '', date: this.today.toLocaleString() };

  ngOnInit() {
    this.getComments();
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if(!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    };
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }

  getComments() {
  this.commentServices.get(this.getSharedIndex).subscribe(
    (response: any) => {
      this.commentData = response;
      this.userFullname = this.commentData.userLastname;
      this.userComment = this.commentData.userComment;
      this.commentDate = this.commentData.commentDate;
      console.log("response ", this.commentData);
    },
    (error) => {
      console.log("error ", error);
    }
  );
  }

  // addComment() {
  //   if (this.newComment.message.trim() !== '') {
  //     this.comments.push({ ...this.newComment });
  //     this.newComment.author = '';
  //     this.newComment.message = '';
  //   }
  // }
}
