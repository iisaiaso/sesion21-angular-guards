import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //aqui va toda la lógica
  if(this.hasUser()){
    return true;
  }else{

    Swal.fire({
      icon: 'success',
      title: 'Para ver formulario tienes que estar Logeado',
      showConfirmButton: false,
      timer: 2500
    })
    //alert('Para ingresar a ver los usuarios debes de estar autenticado')
    return false;
  }

}

hasUser():boolean{
  return false;
}
  
}
