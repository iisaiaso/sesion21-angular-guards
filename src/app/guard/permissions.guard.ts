import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router, private logout: LoginService) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //aqui va toda la lógica
    if (localStorage.getItem('stoylogin')) {
      return true;
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Para ir a la pagina tienes que estar Logeado',
        showConfirmButton: false,
        timer: 1500
      })
      return false;
    }

  }
}
