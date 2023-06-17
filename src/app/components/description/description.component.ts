import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  descriptionData: any;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
      this.dataSharingService.getData().subscribe((data: any) => {
        this.descriptionData = data;
        console.log(this.descriptionData);
      });
    }
  }

