import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const access_token = localStorage.getItem('access_token');
  if (access_token) {
    return true;
  } else {
    setTimeout(() => {
      window.location.href = '/auth'; //hard reload
    }, 500);
    return false;
  }
};
