import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router,private commonService:CommonserviceService){}
  val(form:NgForm)
  {
    console.log("logged in!    ",form.value.username)
    console.log("logged in!!!",form.value.password)
    let uname=localStorage.getItem("uname")
    let password=localStorage.getItem("password")
    this.commonService.login(form.value).subscribe(responce=>{console.log("JWT"+responce  )})
    if(uname===form.value.uname&&password===form.value.password){
      this.router.navigate(["/employees"])
    }
  }
}
