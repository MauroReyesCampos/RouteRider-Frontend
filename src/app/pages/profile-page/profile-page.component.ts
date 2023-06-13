import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  loggedinUserName!: string | null;
  loginUserData!: any;
  userMotorcycle!: string;

  constructor(private userService: UserservicesService) {}

  ngOnInit() {
    this.getUser();
    this.loggedinUserName = localStorage.getItem('userName');

  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if (!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    }
  }

  editProfile() {
    const firstName = document.getElementById(
      'userFirstName'
    ) as HTMLInputElement;
    const lastName = document.getElementById(
      'userLastName'
    ) as HTMLInputElement;
    const email = document.getElementById('userEmail') as HTMLInputElement;
    const birthday = document.getElementById(
      'userBirthday'
    ) as HTMLInputElement;
    const city = document.getElementById('userCity') as HTMLInputElement;
    const userMotorcycle1 = document.getElementById(
      'flexRadioDefault1'
    ) as HTMLInputElement;
    const userMotorcycle2 = document.getElementById(
      'flexRadioDefault2'
    ) as HTMLInputElement;
    const motorcycleBrand = document.getElementById(
      'userMotorcycleBrand'
    ) as HTMLInputElement;
    const motorcycleModel = document.getElementById(
      'userMotorcycleModel'
    ) as HTMLInputElement;
    const motorcycleType = document.getElementById(
      'userMotorcycleType'
    ) as HTMLInputElement;
    const motorcycleYear = document.getElementById(
      'userMotorcycleYear'
    ) as HTMLInputElement;


    if (this.loginUserData.motorcycle === "true") {
      userMotorcycle1.checked = true;
      motorcycleBrand.disabled = false;
      motorcycleModel.disabled = false;
      motorcycleType.disabled = false;
      motorcycleYear.disabled = false;
    } else {
      console.log('no');
      userMotorcycle2.checked = true;
    }

    firstName.disabled = false;
    lastName.disabled = false;
    email.disabled = false;
    birthday.disabled = false;
    city.disabled = false;
    userMotorcycle1.disabled = false;
    userMotorcycle2.disabled = false;
  }

  getUser() {
    this.userService.getUser().subscribe(
      (response: any) => {
        this.loginUserData = response[0];
        console.log(this.loginUserData);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }

  userMotorcycleCheck(): void {
    const motorcycleChecked1 = document.getElementById(
      'flexRadioDefault1'
    ) as HTMLInputElement;
    const motorcycleChecked2 = document.getElementById(
      'flexRadioDefault2'
    ) as HTMLInputElement;
    const motorcycleBrand = document.getElementById(
      'userMotorcycleBrand'
    ) as HTMLInputElement;
    const motorcycleModel = document.getElementById(
      'userMotorcycleModel'
    ) as HTMLInputElement;
    const motorcycleType = document.getElementById(
      'userMotorcycleType'
    ) as HTMLInputElement;
    const motorcycleYear = document.getElementById(
      'userMotorcycleYear'
    ) as HTMLInputElement;

    if(motorcycleChecked1.checked) {
      this.loginUserData.motorcycle = 'true';
      motorcycleBrand.disabled = false;
      motorcycleModel.disabled = false;
      motorcycleType.disabled = false;
      motorcycleYear.disabled = false;
    } else if(motorcycleChecked2.checked) {
      this.loginUserData.motorcycle = 'false';
      motorcycleBrand.disabled = true;
      motorcycleModel.disabled = true;
      motorcycleType.disabled = true;
      motorcycleYear.disabled = true;
    }
  }

  updateProfile() {
    if(this.loginUserData.motorcycle === "true") {
      this.userService.updateUser(this.loginUserData);
    } else {
      this.loginUserData.brand = null;
      this.loginUserData.model = null;
      this.loginUserData.type = null;
      this.loginUserData.year = null;
      this.userService.updateUser(this.loginUserData);
    }
  }

  cancelUpdate() {
    const firstName = document.getElementById(
      'userFirstName'
    ) as HTMLInputElement;
    const lastName = document.getElementById(
      'userLastName'
    ) as HTMLInputElement;
    const email = document.getElementById('userEmail') as HTMLInputElement;
    const birthday = document.getElementById(
      'userBirthday'
    ) as HTMLInputElement;
    const city = document.getElementById('userCity') as HTMLInputElement;
    const userMotorcycle1 = document.getElementById(
      'flexRadioDefault1'
    ) as HTMLInputElement;
    const userMotorcycle2 = document.getElementById(
      'flexRadioDefault2'
    ) as HTMLInputElement;
    const motorcycleBrand = document.getElementById(
      'userMotorcycleBrand'
    ) as HTMLInputElement;
    const motorcycleModel = document.getElementById(
      'userMotorcycleModel'
    ) as HTMLInputElement;
    const motorcycleType = document.getElementById(
      'userMotorcycleType'
    ) as HTMLInputElement;
    const motorcycleYear = document.getElementById(
      'userMotorcycleYear'
    ) as HTMLInputElement;

    firstName.disabled = true;
    lastName.disabled = true;
    email.disabled = true;
    birthday.disabled = true;
    city.disabled = true;
    userMotorcycle1.disabled = true;
    userMotorcycle2.disabled = true;
    motorcycleBrand.disabled = true;
    motorcycleModel.disabled = true;
    motorcycleType.disabled = true;
    motorcycleYear.disabled = true;

  }
}
