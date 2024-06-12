import { Component } from '@angular/core';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true

  onloggOut(){
    this.isLoginMode = !this.isLoginMode
  }

}
