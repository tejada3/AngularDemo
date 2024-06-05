import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemService} from "../../services/items/item.service";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  providers:[HttpClient, ItemService]
})
export class StatsComponent implements OnInit{

  itemData = {
    'Soda':0,
    "Cereal":0,
    'Water':0,
    "SaltySnacks":0,
    'Milk':0,
    "LaundryDetergent":0,
    'Eggs':0,
    "PeanutButterAndJelly":0,
    'PackagedMeats':0,
    "Bread":0,
  }


  constructor(private  http:HttpClient, private ItemService: ItemService) { }


  ngOnInit(): void {

  }

  getTheStats(){
    this.ItemService.getStats()
    this.itemData = this.ItemService.itemData

  }

}
