import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private apiUrl = "http://localhost:3000/api/users";
  private authenticationErrorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  authenticationError$: Observable<string> = this.authenticationErrorSubject.asObservable();
  private creationErrorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  creationError$: Observable<string> = this.creationErrorSubject.asObservable();

  loggedinUserName!: string | null;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(userEmail: string, userPassword: string): void {
    const loginUrl = `${this.apiUrl}/login`;
    const formData = {
      email: userEmail,
      password: userPassword
    }
    this.http.post(loginUrl, formData).subscribe(
      (response: any) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userName", response.userFirstName);
        localStorage.setItem("userLastName", response.userLastName);
        this.router.navigate(['/home']);
      },
      (error) => {
        if(error instanceof HttpErrorResponse) {
          if(error.error instanceof ErrorEvent) {
            console.log("Error:", error.error.message);
          }
          this.authenticationErrorSubject.next('Usuario o contraseña incorrectos');
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    );
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userLastName");
  }

  create(firstName: string, lastName: string, email: string, password: string, birthday: string, phone: number, motorcycle: boolean, brand: string, model: string, type: string, year: number): void {
    const createUrl = `${this.apiUrl}/create`;
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthday: birthday,
      phone: phone,
      motorcycle: motorcycle,
      brand: brand,
      model: model,
      type: type,
      year: year,
      registerDate: ''
    }
    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        localStorage.setItem("userName", response.userFirstName);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.creationErrorSubject.next('El correo eléctronico ya existe');
        console.log("Error: ", error);
      }
    );
  }

  userData(userEmail: string): any {
    const userUrl = `${this.apiUrl}/${userEmail}`;
    this.http.get(userUrl).subscribe(
      (response: any) => {
        localStorage.setItem("userName", response.user.firstName);
      },
      (error) => {
        if(error instanceof HttpErrorResponse) {
          if(error.error instanceof ErrorEvent) {
            console.log("Error:", error.error.message);
          }
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    );
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  private getAuthHeaders():HttpHeaders{
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({"Authorization":`Bearer ${authToken}`});
    console.log(headers);
    return headers;
  }
}
