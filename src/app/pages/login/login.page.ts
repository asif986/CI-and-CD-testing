import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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

}
