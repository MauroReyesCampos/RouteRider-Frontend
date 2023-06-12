import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  userName!: string | null;
  userLastName!: string | null;
  loginUserData!: any;


  constructor(private userService: UserservicesService) { }

  ngOnInit() {
    this.getUser();
    this.userName = localStorage.getItem("userName");
    this.userLastName = localStorage.getItem("userLastName");
  }


  editProfile() {
    const firstName = document.getElementById('userFirstName') as HTMLInputElement;
    const lastName = document.getElementById('userLastName') as HTMLInputElement;
    const email = document.getElementById('userEmail') as HTMLInputElement;
    const birthday = document.getElementById('userBirthday') as HTMLInputElement;
    const city = document.getElementById('userCity') as HTMLInputElement;
    const radioButtonYes = document.getElementById('motorcycleYes') as HTMLInputElement;
    const radioButtonNo = document.getElementById('motorcycleNo') as HTMLInputElement;
    const motorcycleBrand = document.getElementById('userMotorcycleBrand') as HTMLInputElement;
    const motorcycleModel = document.getElementById('userMotorcycleModel') as HTMLInputElement;
    const motorcycleType = document.getElementById('userMotorcycleType') as HTMLInputElement;
    const motorcycleYear = document.getElementById('userMotorcycleYear') as HTMLInputElement;

    firstName.disabled = false;
    lastName.disabled = false;
    email.disabled = false;
    birthday.disabled = false;
    city.disabled = false;
    radioButtonYes.disabled = false;
    radioButtonNo.disabled = false;
    motorcycleBrand.disabled = false;
    motorcycleModel.disabled = false;
    motorcycleType.disabled = false;
    motorcycleYear.disabled = false;
  }

  getUser() {
    this.userService.getUser()
    .subscribe(
      (response:any) => {
        this.loginUserData = response[0];
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  updateProfile() {
    this.userService.updateUser(this.loginUserData)
  }
}
