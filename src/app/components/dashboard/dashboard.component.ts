import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeyValuePipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    NgForOf,
    KeyValuePipe
  ],
  providers: [HttpClient]
})
export class DashboardComponent implements OnInit{
  public getDataValue: any;
  constructor(private  http:HttpClient) {
  }

  ngOnInit(): void{
    this.getItemMethods()

  }

  public getItemMethods(){
    this.http.get('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com/apiDeply/items').subscribe((data) => {

      this.getDataValue = data


      console.log(this.getDataValue['body'])
      return JSON.parse(this.getDataValue['body'])
    });
                        }

}
