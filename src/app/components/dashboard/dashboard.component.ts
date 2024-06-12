import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeyValuePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {ItemService} from "../../services/items/item.service";
import {Item} from "../../models/Item";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import { Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    NgForOf,
    KeyValuePipe,
    UpperCasePipe,
    ItemDetailComponent
  ],
  providers: [HttpClient, ItemService]
})
export class DashboardComponent implements OnInit{

  items: Item[] = []



  constructor(private  http:HttpClient, private ItemService: ItemService) { }

  ngOnInit() {
    this.displayEm()
  }

  public displayEm() {
    console.log(this.ItemService.getItemMethods())
    this.items = this.ItemService.itemss
    console.log(this.items)

  }


}
