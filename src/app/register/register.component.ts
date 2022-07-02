import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user  =new User();
  msg='';
  constructor(private _register:RegisterService,private _router:Router) { }

  ngOnInit(): void {
  }


  registeruser(){
    this._register.registerUser(this.user).subscribe
    (
    data =>{
    console.log("response recieved")
    this.msg="ok";
      },
    error =>
    {
      console.log("exception occured")
      this.msg=error.error;
      
    }
    );
    
      } 
}
