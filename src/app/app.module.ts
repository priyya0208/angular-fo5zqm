import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
const appRoutes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:PagenotfountComponent}
]
@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule
     ],
  declarations: [ AppComponent, LoginComponent, PagenotfountComponent, HomeComponent, LogoutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
