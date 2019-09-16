import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
   email:String;
   pwd:String;
  ngOnInit() {
    
  }
  onSubmit() {
    if(this.email == "user@gmail.com" && this.pwd == "password"){
      this.router.navigate(['/home']);
      
    }
    else {
      this.router.navigate(['/register']);
    }
  }
}