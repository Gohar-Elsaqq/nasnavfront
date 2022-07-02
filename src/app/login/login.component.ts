import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user  =new User();
msg='';
  constructor(private _register:RegisterService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginuser(){
this._register.loginUserFromRemote(this.user).subscribe
(
data =>{
console.log("response recieved")
this._router.navigate(["/loginsucces"])
  },
error =>
{
  console.log("exception occured")
  this.msg="bad credentials";
}
);

  }
}
