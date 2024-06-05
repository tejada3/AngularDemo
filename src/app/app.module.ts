import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HttpClient} from "@angular/common/http";
import {PostItemComponent} from "./components/post-item/post-item.component";
import {ItemDetailComponent} from "./components/dashboard/item-detail/item-detail.component";
import {AuthGaurd} from "./auth-guard.service";
import {AuthService} from "./services/auth.service";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutesModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./components/login/login.component";



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutesModule

  ],
  exports:[AppRoutesModule],
  providers:[HttpClient, AuthGaurd, AuthService , RouterOutlet],
  bootstrap:[AppComponent]
})
export class AppModule {

}
