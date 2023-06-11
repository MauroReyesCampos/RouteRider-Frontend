import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userEmail:string = "";
  userPassword:string = "";
  errorMessage: string = "";

  constructor(public windowService: WindowService, private userService: UserservicesService) {}

  ngOnInit() {
    if(this.userEmail === "" || this.userPassword === "") {
      this.errorMessage = "";
    }
    this.userService.authenticationError$.subscribe((errorMessage: string) => {
      this.errorMessage = errorMessage;
    });
  }

  userLogin() {
    this.userService.login(this.userEmail, this.userPassword)
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }
}
