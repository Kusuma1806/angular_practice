import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  imports: [DatePipe,CurrencyPipe,UpperCasePipe,SlicePipe],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
name="kusuma"
employees:Employee[]

constructor(){
  this.employees= [
    new Employee(1,"pooji",9000,"trainee",new Date("2025/05/22")),
    new Employee(2,"ajay",90000,"hr",new Date("2025/05/22")),
    new Employee(4,"krish",908900,"trainer",new Date("2025/05/22")),
    new Employee(3,"vish",9008780,"dev",new Date("2025/05/22"))
  ]
}
delete(emp:Employee){

  let confirmation=confirm("Are You sure ? you want to delete")
  if(confirmation){
    let index=this.employees.indexOf(emp)
    console.log(index)
    this.employees.splice(index,1)
    alert("deleted successfully")
  }
}
}
class Employee{
  eid:number;
  ename:string;
  esal:number;
  edesg:string;
  edoj:Date

  constructor(eid:number,ename:string,esal:number,edesg:string,edoj:Date){
    this.eid=eid;
    this.ename=ename;
    this.esal=esal
    this.edesg=edesg
    this.edoj=edoj
  }

}
