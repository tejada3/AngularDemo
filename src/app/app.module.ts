import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HttpClient} from "@angular/common/http";
import {PostItemComponent} from "./components/post-item/post-item.component";
import {ItemDetailComponent} from "./components/dashboard/item-detail/item-detail.component";

import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutesModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";

import {ReactiveFormsModule} from "@angular/forms";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {AuthService} from "./auth/auth.service";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutesModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule

  ],
  exports:[AppRoutesModule],
  providers:[HttpClient, AuthService , RouterOutlet],
  bootstrap:[AppComponent]
})
export class AppModule {


}
