import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   testuser: User[]= [
    new User("Jose", "Tejada", "joset", "12345", false),
    new User("Andrea", "Tejada", "andreat", "12345", false),
    new User("Bob", "Tejada", "bobt", "12345", false),
  ]
  user = User
  loggedIn = false;
  constructor(private router: Router) { }

  isAuthenticated(){
    return this.loggedIn
  }
  login(username:string, password:string){

    for (let i in this.testuser){
      if((this.testuser[i].userName === username && this.testuser[i].password.toString()===password)){
        console.log("Login Successful");
        this.loggedIn = true
        console.log(this.loggedIn)
        return true

      }else{
        console.log("Not found")


      }

    }
    return false

  }

    logout(){
    this.loggedIn = false;
  }

}
