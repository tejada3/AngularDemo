import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService, Router]
})
export class LoginComponent implements OnInit{

  constructor(private auth: AuthService, private router:Router) {
  }

  onSubmit(form:NgForm){

    if(this.auth.login(form.value['username'], form.value['password'])){

      this.router.navigate(["postItem"]).then(r => {
        console.log("successsly navigated after log in")
      })

    }else {
      console.log("Username and password wrong")}

  }

  ngOnInit(): void {
  }

}
