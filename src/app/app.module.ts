import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfountComponent}
]
@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent, RegisterComponent, PagenotfountComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
