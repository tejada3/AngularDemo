import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthUser, getCurrentUser, signIn, signOut} from 'aws-amplify/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  async getCurrentUser():Promise<AuthUser>{
    return await getCurrentUser()
  }

  async signup(email:string, password:string, username:string){
    return this.http.post('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1X8wYAqHH/.well-known/jwks.json',{email:email, password:password, username:username})
      .subscribe(response =>{
        console.log(response)
      })

  }
  async signIn(username:string, password:string){
    const user = await signIn({username:username, password:password});
    console.log('signIn', user);
  }


  async signOut() {
    try {
      await signOut();
      console.log('signOut');
    } catch (error) {
      console.error('Error signing out', error);
    }
  }
}
