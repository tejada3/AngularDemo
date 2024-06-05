import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemService} from "../../../services/items/item.service";

import {NgForOf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe,
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
  providers:[]
})
export class ItemDetailComponent {
  @Input() storeItem: any;
  @Input() storeName: any;
  @Input() Price: any;
  @Input() town: any;
  @Input() state: any;



  constructor(private  http:HttpClient, private ItemService: ItemService) { }



}
