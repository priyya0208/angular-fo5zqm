import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formdata;
   cutomerdata;
   constructor(private http: Http) { }
   stateCtrl: FormControl;
   ngOnInit() {
      this.formdata = new FormGroup({
         fname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])),
         lname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(3)
         ])),
         address:new FormControl(""),
         phoneno:new FormControl("")
      });
   }
   onClickSubmit(data) {
      document.getElementById("custtable").style.display="";
      this.cutomerdata = [];
      for (var prop in data) {
         this.cutomerdata.push(data[prop]);
      }
      console.log(this.cutomerdata);
   }

}