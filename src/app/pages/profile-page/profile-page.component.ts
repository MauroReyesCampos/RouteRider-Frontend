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
  editUserProfile: boolean = false;

  constructor(private userService: UserservicesService) { }

  ngOnInit() {
    this.getUser();
    this.userName = localStorage.getItem("userName");
    this.userLastName = localStorage.getItem("userLastName");
  }


  editProfile(){
    this.editUserProfile = true;
  }

  getUser(){
    this.userService.getUser()
    .subscribe(
      (response:any) => {
        console.log("response: ",response);
        this.loginUserData = response[0];
        console.log(this.loginUserData.city)
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

}
