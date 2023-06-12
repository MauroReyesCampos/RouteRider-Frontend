import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userFirstName!: string;
  userLastName!: string;
  userEmail!: string;
  userPassword!: string;
  userPasswordConfirm!: string;
  passwordConfirmed!:string;
  userBirthday!: string;
  userCity!: string;
  userMotorcycle!: string;
  userMotorcycleBrand!: string;
  userMotorcycleModel!: string;
  userMotorcycleType!: string;
  userMotorcycleYear!: string;
  errorMessage: string = '';


  constructor(private userService: UserservicesService) {}

  ngOnInit() {
    this.userService.creationError$.subscribe((errorMessage: string) => {
      this.errorMessage = errorMessage;
    });
  }

  motorcycleChequed(): void {
    const motorcycleChecked = document.getElementById('userMotorcycleYes') as HTMLInputElement;
    const motorcycleBrand = document.getElementById('userMotorcycleBrand') as HTMLInputElement;
    const motorcycleModel = document.getElementById('userMotorcycleModel') as HTMLInputElement;
    const motorcycleType = document.getElementById('userMotorcycleType') as HTMLInputElement;
    const motorcycleYear = document.getElementById('userMotorcycleYear') as HTMLInputElement;

    if(motorcycleChecked.value === "yes") {
        motorcycleBrand.disabled = false;
        motorcycleModel.disabled = false;
        motorcycleType.disabled = false;
        motorcycleYear.disabled = false;
      } else {
        motorcycleBrand.disabled = true;
        motorcycleModel.disabled = true;
        motorcycleType.disabled = true;
        motorcycleYear.disabled = true;
      }
  }

  createUser():void {
    if(this.userPassword !== this.userPasswordConfirm) {
      this.errorMessage = "Las contraseñas ingresadas no coinciden"
    } else {
      this.passwordConfirmed = this.userPasswordConfirm;
      this.userService.create(this.userFirstName, this.userLastName, this.userEmail, this.passwordConfirmed, this.userBirthday, this.userCity, this.userMotorcycle, this.userMotorcycleBrand, this.userMotorcycleModel, this.userMotorcycleType, this.userMotorcycleYear);
    }

  }
  
  clearErrorMessage(): void {
    this.errorMessage = '';
  }
}
