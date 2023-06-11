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
  
  
  // create(firstName: string, lastName: string, email: string, password: string, birthday: string, phone: number, motorcycle: boolean, brand: string, model: string, type: string, year: number): void {
  //   const createUrl = `${this.apiUrl}/create`;
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: password,
  //     birthday: birthday,
  //     phone: phone,
  //     motorcycle: motorcycle,
  //     brand: brand,
  //     model: model,
  //     type: type,
  //     year: year,
  //     registerDate: ''
  //   }
  //   this.http.post(createUrl, formData).subscribe(
  //     (response: any) => {
  //       localStorage.setItem("userName", response.userFirstName);
  //       this.router.navigate(['/home']);
  //     },
  //     (error) => {
  //       this.creationErrorSubject.next('El correo eléctronico ya existe');
  //       console.log("Error: ", error);
  //     }
  //   );
  // }
}


