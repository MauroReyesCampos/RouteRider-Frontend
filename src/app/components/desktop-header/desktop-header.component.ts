import { Component, Input, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.css']
})
export class DesktopHeaderComponent implements OnInit {
  //input ingreso de datos de un componente padre - el appcomponent es el padre
  @Input() ocultarLista = false
  loggedinUserName!: string | null;

  constructor(public userService: UserservicesService) {}

  ngOnInit() {
    this.loggedinUserName = localStorage.getItem('userName');
  }

  ngDoCheck() {
    this.loggedinUserName = localStorage.getItem('userName');
    if(!this.loggedinUserName) {
      this.loggedinUserName = "Invitado"
    };
  }

  logout(): void {
    this.userService.logout();
  }
}
