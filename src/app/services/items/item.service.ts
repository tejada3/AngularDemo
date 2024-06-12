import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../../models/Item";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

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

  public getDataValue: any;
  public itemss: Item[] = []
  constructor(private  http:HttpClient) {

  }

    public postItem(i:Item) {
    this.http
      .post('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com/apiDeply/items',i)
      .subscribe(response => {

      console.log("Data")
      console.log(response)

    });}

  // public getthemall() {
  //   return new Promise((resolve, reject) => {
  //   this.http.get('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com').toPromise()
  //     .then(res => {
  //         console.log(res);
  //       }
  //     );
  // })
  // }



  // public getItemMethods() {
  //   this.http
  //     .get<Response>('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com/apiDeply/items')
  //     .subscribe(response => {
  //     this.getDataValue = response.body
  //     let json_item = JSON.parse(this.getDataValue)
  //
  //     for(let i of json_item){
  //       this.itemss.push(i)
  //     }
  //   });
  //                       }

    public getItemMethods() {
    this.http
      .get<Item[]>('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com/apiDeply/items',{observe: 'body', responseType:'json'})
      .subscribe(response=>{
        this.getDataValue = response
        let json_item = this.getDataValue.body
        console.log(JSON.parse(json_item))

         for(let i of JSON.parse(json_item)){
        this.itemss.push(i)
      }
        return JSON.parse(json_item)

      }
    )

    }

  public getStats() {
    this.http.get<Response>('https://tnifbs1kd5.execute-api.us-east-1.amazonaws.com/apiDeply/items').subscribe(response => {

      console.log("Data")
      console.log(response.body)

      this.getDataValue = response.body

      let json_item = JSON.parse(this.getDataValue)
      this.itemss = json_item

      for(let i of json_item){
        if (i['Category'] == "Milk")
          this.itemData.Milk += Number(i['Price'])
        console.log(i['Price'])

        if (i['Category'] == "Packaged Meats")
          this.itemData.PackagedMeats += Number(i['Price'])

        if (i['Category'] == "Soda")
          this.itemData.Soda += Number(i['Price'])


        if (i['Category'] == "Cereal")
          this.itemData.Cereal += Number(i['Price'])


        if (i['Category'] == "Water")
          this.itemData.Water += Number(i['Price'])


        if (i['Category'] == "Laundry Detergent")
          this.itemData.LaundryDetergent += Number(i['Price'])

        if (i['Category'] == "Eggs")
          this.itemData.Eggs += Number(i['Price'])


        if (i['Category'] == "Peanut Butter & Jelly")
          this.itemData.PeanutButterAndJelly += Number(i['Price'])


        if (i['Category'] == "Bread")
          this.itemData.Bread += Number(i['Price'])


        if (i['Category'] == "SaltySnacks")
          this.itemData.SaltySnacks += Number(i['Price'])


      }

      this.itemData.Milk = Number((this.itemData.Milk/this.itemss.filter(d=>d.Category === 'Milk').length).toFixed(2))
      this.itemData.PackagedMeats = Number((this.itemData.PackagedMeats/this.itemss.filter(d=>d.Category === 'Packaged Meats').length).toFixed(2))
      this.itemData.Soda = Number((this.itemData.Soda/this.itemss.filter(d=>d.Category === 'Soda').length).toFixed(2))
      this.itemData.Cereal = Number((this.itemData.Cereal/this.itemss.filter(d=>d.Category === 'Cereal').length).toFixed(2))
      this.itemData.Water = Number((this.itemData.Water/this.itemss.filter(d=>d.Category === 'Water').length).toFixed(2))
      this.itemData.LaundryDetergent =Number((this.itemData.LaundryDetergent/this.itemss.filter(d=>d.Category === 'Laundry Detergent').length).toFixed(2))
      this.itemData.Eggs = Number((this.itemData.Eggs/this.itemss.filter(d=>d.Category === 'Eggs').length).toFixed(2))
      this.itemData.PeanutButterAndJelly = Number((this.itemData.PeanutButterAndJelly/this.itemss.filter(d=>d.Category === 'Peanut Butter & Jelly').length).toFixed(2))
      this.itemData.Bread = Number((this.itemData.Bread/this.itemss.filter(d=>d.Category === 'Bread').length).toFixed(2))
      this.itemData.SaltySnacks = Number((this.itemData.SaltySnacks/this.itemss.filter(d=>d.Category === 'Salty Snacks').length).toFixed(2))

    });
                        }


}

