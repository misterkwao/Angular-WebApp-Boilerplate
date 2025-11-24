// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { SharedService } from '../services/shared.service';
// import { ToastService } from '../../shared/components/toast-container/toast.service';
// import { filter, map } from 'rxjs/operators';
// import { LoggedInUser } from '../models/general.models';

// export const roleGuard: CanActivateFn = (route, state) => {
//   // Variables
//   const sharedService = inject(SharedService);
//   const toastService = inject(ToastService);
//   const router = inject(Router);
//   const requiredRole = route.data['role'];

//   sharedService.getloggedInUser();
//   return sharedService.loggedInUser$.pipe(
//     filter((response): response is LoggedInUser => response != null),
//     map((response) => {
//       if (requiredRole.includes(response?.user_role)) {
//         return true;
//       } else {
//         toastService.showToast('Access Denied', 0, 'error');
//         router.navigate(['/auth']);
//         return false;
//       }
//     })
//   );
// };
