import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccesComponent } from './loginsucces/loginsucces.component';
import { RegisterComponent } from './register/register.component';
import { ImageComponent } from './image/image.component';



const routes:Routes =[
  {path:'',component:LoginComponent},
  {path:'loginsucces',component:LoginsuccesComponent},
  {path:'register',component:RegisterComponent},
  {path:'image',component:ImageComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

  
})
export class AppRoutingModule { }
