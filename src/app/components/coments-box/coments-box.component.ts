import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentservicesService } from 'src/app/services/commentservices.service';

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
  getSharedIndex!: number;
  private indexSubscription!: Subscription;
  commentData!: any;
  userFullname!: string;
  userComment!: string;
  commentRoute!: any;
  firstName!: any | null;
  lastName!: any | null;

  constructor(
    private commentServices: CommentservicesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.indexSubscription = this.commentServices
      .getSharedIndex()
      .subscribe((index: any) => {
        this.commentRoute = index;
        this.getComments(index);
      });
  }

  // comments: Comment[] = [];
  // newComment: Comment = { author: '', message: '', date: this.today.toLocaleString() };

  ngOnInit() {
    this.getComments(this.commentRoute);
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if (!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    }
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }

  getComments(index: number) {
    this.commentServices.get(index).subscribe(
      (response: any) => {
        this.commentData = response;
      },
      error => {
        console.log('error ', error);
      }
    );
  }

  createComment(): void {
    this.firstName = localStorage.getItem('userName');
    this.lastName = localStorage.getItem('userLastName');
    this.commentServices
      .create(
        this.firstName,
        this.lastName,
        this.userComment,
        this.commentRoute
      )
      .subscribe((response: any) => {
        const newComment = response;
        this.commentData.push(newComment);
        this.userComment = '';
      });
  }

  // addComment() {
  //   if (this.newComment.message.trim() !== '') {
  //     this.comments.push({ ...this.newComment });
  //     this.newComment.author = '';
  //     this.newComment.message = '';
  //   }
  // }
}
