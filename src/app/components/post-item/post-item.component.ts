import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Item} from "../../models/Item";
import {JsonPipe, NgIf} from "@angular/common";
import {ItemService} from "../../services/items/item.service";


import {RouterLink} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    NgIf,
    RouterLink,

  ],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
  providers:[ItemService, AuthService]
})
export class PostItemComponent implements OnInit{


  isLoggedIn = false

  ngOnInit(): void {
    this.Logged()
  }

  it = new Item('','', '', '', '', '', '', '')

  constructor(private ItemService: ItemService) {

  }


  onSubmit(){
      console.log("Post data")
      console.log(this.it)
      this.ItemService.postItem(this.it)


  }

  Logged(){

  }


}
