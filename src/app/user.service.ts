import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = "http://localhost:3000/users"
  constructor(private client: HttpClient) {
 
  }
 
 
  getAllUsers() {
    return this.client.get(this.path)
  }
}
 
export class User {
  id: number;
  name: string;
  email: string;
}