import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '@shared/models/User';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const userService: UserService = inject(UserService);
  const user: User = userService.currentUser;

  if (user.token) {
    req = req.clone({
      setHeaders: {
        access_token: user.token
      }
    });
  }
  return next(req);
};
