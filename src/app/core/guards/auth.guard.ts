import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

export const authGuard: CanActivateFn = () => {
  let isAuth = inject(UserService);
  let router = inject(Router);

  if (isAuth && isAuth.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
