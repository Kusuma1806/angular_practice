import { CanActivateFn } from '@angular/router';

export const guardingGuard: CanActivateFn = (route, state) => {
  let name=localStorage.getItem("uname")
  if(name!==null)
  return true;
else
return false;
};
