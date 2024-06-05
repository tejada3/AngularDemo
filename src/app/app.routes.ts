 import {RouterModule, Routes} from '@angular/router';
 import {HomeComponent} from "./components/home/home.component";

 import {DashboardComponent} from "./components/dashboard/dashboard.component";
 import {StatsComponent} from "./components/stats/stats.component";
 import {PostItemComponent} from "./components/post-item/post-item.component";
 import {AuthGaurd} from "./auth-guard.service";
 import {NgModule} from "@angular/core";
 import {LoginComponent} from "./components/login/login.component";


export const appRoutes: Routes = [

  {path:'', component: HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'stats', component:StatsComponent},
  {path:'postItem', component:PostItemComponent },
  {path:'login', component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule],
})
export class AppRoutesModule{

}
