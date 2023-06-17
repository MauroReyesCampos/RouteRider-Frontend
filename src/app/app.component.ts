import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { WindowService } from './services/window.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listoocu = false;
  constructor(private router: Router, public windowService: WindowService) {
    this.router.events.subscribe((event) => {
      //
      if (event instanceof NavigationEnd) {
        this.listoocu = event.url === "/home"
      }
    });    
  }
}
