import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentservicesService {
  private apiUrl = "http://localhost:3000/api/comments";
  private indexSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  setSharedIndex(index: number) {
    this.indexSubject.next(index);
  }

  getSharedIndex() {
    return this.indexSubject.asObservable();
  }

  get(route: number) {
    const getUrl = `${this.apiUrl}/${route}`;
    return this.http.get(getUrl);
  }
  
  create(firstName: string, lastName: string, comment: string, route: any) {
    const postUrl = `${this.apiUrl}/create`;
    const formData = {
      userName: firstName,
      userLastname: lastName,
      userComment: comment,
      commentRoute: route,
      commentDate: ''
    }
    return this.http.post(postUrl, formData)
  }
}


