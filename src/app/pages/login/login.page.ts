import { Component, OnDestroy, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit ,OnDestroy{
email:string;
password:string;

  constructor() { }
  onClick(){}
  ngOnInit() {
  }
  login(form:NgForm)
  {
    console.log("hii")
  }
  ngOnDestroy(){
    
  }

}
