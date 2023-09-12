import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root',
})
class RoleGuards {
  constructor(private router: Router,private dataservice : DataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let userRole = this.dataservice.user.role;
    

    if (userRole > 1) {
      // Vérifiez si la route commence par 'accueiladmin'
      if (state.url.startsWith('/accueilsuperadmin')) {
        return true; // L'utilisateur est autorisé à accéder à la route.
      }
      return this.router.parseUrl('/accueilsuperadmin'); // Remplacez '/autre-page' par le chemin de redirection souhaité.
    } else {
      // L'utilisateur n'a pas les autorisations nécessaires, redirigez-le vers une autre page.
      return this.router.parseUrl('/login'); // Remplacez '/autre-page' par le chemin de redirection souhaité.
    }
  }
}
export const RoleGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree =>{
    return inject(RoleGuards).canActivate(route,state);
}
