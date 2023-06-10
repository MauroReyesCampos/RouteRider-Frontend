import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.css']
})

export class HomePageOneComponent {
  loggedinUserName!: string | null;

  constructor(public windowService: WindowService) {}

  ngOnInit() {
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if(!this.loggedinUserName) {
      this.loggedinUserName = 'Invitado';
    };
  }

}
