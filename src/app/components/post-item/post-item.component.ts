import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Item} from "../../models/Item";
import {JsonPipe} from "@angular/common";
import {ItemService} from "../../services/items/item.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {AuthGaurd} from "../../auth-guard.service";

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
  providers:[ItemService, AuthService, AuthGaurd]
})
export class PostItemComponent {

  it = new Item('','', '', '', '', '', '', '')

  constructor(private ItemService: ItemService) { }


  onSubmit(){
      console.log("Post data")
      console.log(this.it)
      this.ItemService.postItem(this.it)


  }


}
