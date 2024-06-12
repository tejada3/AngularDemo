 import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {HttpClient} from "@angular/common/http";
 import {StatsComponent} from "./components/stats/stats.component";
 import {PostItemComponent} from "./components/post-item/post-item.component";
 import {ItemDetailComponent} from "./components/dashboard/item-detail/item-detail.component";
 import {AuthService} from "./auth/auth.service"
 import {AppRoutesModule} from "./app.routes";
 import {User} from "./models/User";
 import {AmplifyAuthenticatorModule, AuthenticatorService} from "@aws-amplify/ui-angular";
 import Amplify from "aws-amplify";

 import awsconfig from "../aws-exports"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, HomeComponent, RouterLink, StatsComponent, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AppRoutesModule, AuthService]
})
export class AppComponent implements OnInit{
  title = 'Angular Demo';
  isLogged = false
  user = User


  constructor(private auth:AuthenticatorService, private authserver: AuthService) {
    console.log(this.isLogged)

  }

  async ngOnInit(): Promise<void> {
    let user = await this.authserver.getCurrentUser()
    console.log(user)


  }




}
