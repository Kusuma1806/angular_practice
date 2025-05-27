import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  val(form:NgForm)
  {
    console.log("logged in!!!",form.value.uname)
    let uname=localStorage.getItem("uname")
    let password=localStorage.getItem("password")
    if(uname===form.value.uname&&password===form.value.password){
      this.router.navigate(["/employees"])
    }
  }
}
