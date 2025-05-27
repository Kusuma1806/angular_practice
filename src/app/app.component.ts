import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonserviceService } from './commonservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,LoginComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string="Kusuma Reddy"
  country:string="USA"
  isLoggedIn=false
  constructor(private router:Router,private commonService:CommonserviceService){

  }
  logout(){
    this.isLoggedIn=true
    alert("logged out")
    this.commonService.sayHello()
    localStorage.removeItem("uname")
    localStorage.removeItem("password")
    this.router.navigate(["/login"])
  }
  
}

