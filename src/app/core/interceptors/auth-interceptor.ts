// import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { AuthService } from '../../features/auth/services/auth';
// import { catchError, switchMap, throwError } from 'rxjs';
// import { ToastService } from '../../shared/components/toast-container/toast.service';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {

//   const authService = inject(AuthService)
//   const toastService = inject(ToastService)

//   const access_token = localStorage.getItem('access_token');
//   const refresh_token = localStorage.getItem('refresh_token') ?? '';

//   const modifiedReq = req.clone({
//     setHeaders: {
//       ...(access_token ? { Authorization: `Bearer ${access_token}` } : {})
//     },
//   });
//   return next(modifiedReq).pipe(
//     catchError((error) => {
//       if (error instanceof HttpErrorResponse && error.status === 401 && error.error.message !== 'Invalid Credentials') {
//         // If 401 error, try to refresh token
//         return authService.refreshAccessToken(refresh_token).pipe(
//           switchMap((res) => {
//             const newAccessToken = res.access_token;
//             localStorage.setItem('access_token', newAccessToken);

//             // Retry the original request with the new token
//             const retryReq = req.clone({
//               setHeaders: { Authorization: `Bearer ${newAccessToken}` },
//             });

//             return next(retryReq);
//           }),
//           catchError((refreshError) => {
//             // If refresh also fails, logout
//             localStorage.clear();
//             toastService.showToast("Session expired. Please log in again.",3500,"error")
//             setTimeout(()=>{
//               window.location.href ='/auth' //hard reload
//             },1200)
//             return throwError(() => refreshError);
//           })
//         );
//       }

//       return throwError(() => error);
//     })
//   );
// };
