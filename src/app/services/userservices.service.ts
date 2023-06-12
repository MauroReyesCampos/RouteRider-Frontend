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

  private loginUserEmail!: string;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(userEmail: string, userPassword: string): void {
    const loginUrl = `${this.apiUrl}/login`;
    const formData = {
      email: userEmail,
      password: userPassword
    }
    this.http.post(loginUrl, formData, {headers: this.getAuthHeaders()}).subscribe(
      (response: any) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userName", response.userFirstName);
        localStorage.setItem("userLastName", response.userLastName);
        this.loginUserEmail = userEmail;
        this.getUser();
        this.router.navigate(['/home']);
      },
      (error) => {
        if(error instanceof HttpErrorResponse) {
          if(error.error instanceof ErrorEvent) {
            console.log("Error:", error.error.message);
          }
          this.authenticationErrorSubject.next('Correo electrónico y/o contraseña incorrectos');
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

  create(firstName: string, lastName: string, email: string, password: string, birthday: string, city: string, motorcycle: string, brand: string, model: string, type: string, year: string): void {
    const createUrl = `${this.apiUrl}/create`;

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthday: birthday,
      city: city,
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
        localStorage.setItem("userLastname", response.userLastName);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.creationErrorSubject.next('El correo eléctronico ya existe');
        console.log("Error: ", error);
      }
    );
  }

  getUser() {
    const userUrl = `${this.apiUrl}/?email=${this.loginUserEmail}`;
    return this.http.get(userUrl);
  }

  updateUser(body: any){
    const updateUrl = `${this.apiUrl}/update/${body._id}`
    const formData = body

    console.log("Usuario actualizado con éxito", formData, updateUrl);

    this.http.put(updateUrl,formData)
    .subscribe(
      (response:any) => {
        console.log("Usuario actualizado con éxito. ", response);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
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
