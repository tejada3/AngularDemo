import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private auth:AuthService) {
  }
  onSubmit(form:NgForm){
    if(!form.value.password === form.value.password2)
      return

    this.auth.signup(form.value.email, form.value.password, form.value.username)
    console.log(form.value)
    form.resetForm()
  }
}
