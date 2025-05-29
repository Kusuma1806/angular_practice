import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { guardingGuard } from './guarding.guard';

export const routes: Routes = [
        {path:"",component:LoginComponent},
        {path:"register",component:RegistrationComponent},
        {path:"login",component:LoginComponent},
        {path:"employees",component:EmployeesComponent,canActivate:[guardingGuard]},
        {path:"parent",component:ParentComponent},
        {path:"child",component:ChildComponent}
];
