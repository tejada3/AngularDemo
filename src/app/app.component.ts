 import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {HttpClient} from "@angular/common/http";
 import {StatsComponent} from "./components/stats/stats.component";
 import {PostItemComponent} from "./components/post-item/post-item.component";
 import {ItemDetailComponent} from "./components/dashboard/item-detail/item-detail.component";
 import {AuthGaurd} from "./auth-guard.service";
 import {AuthService} from "./services/auth.service";
 import {AppRoutesModule} from "./app.routes";
 import {Item} from "./models/Item";
 import {User} from "./models/User";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, HomeComponent, RouterLink, StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AppRoutesModule]
})
export class AppComponent {
  title = 'Angular Demo';




}
