import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AppComponent} from "../../app.component";

import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

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


  }

  ngOnInit(): void {
  }

}
