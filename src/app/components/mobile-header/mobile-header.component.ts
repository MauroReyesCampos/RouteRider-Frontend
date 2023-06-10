import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  // enableProfileLink: boolean = false;
  loggedinUserName!: string | null;

  constructor(public userService: UserservicesService) {}


  ngOnInit() {
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if(!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    };
  }

  logout(): void {
    this.userService.logout();
  }

  navBarCollapse(): void {
    const navBar = document.getElementById("navbarNav");
    navBar?.classList.remove("show");
  }

}
