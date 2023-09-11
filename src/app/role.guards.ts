import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class RoleGuards {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const userRole = 3; 

    // Vérifiez si le rôle de l'utilisateur est supérieur à 2.
    if (userRole > 2) {
      return true; // L'utilisateur est autorisé à accéder à la route.
    } else {
      // Redirigez l'utilisateur vers une autre page s'il n'a pas les autorisations nécessaires.
      return this.router.parseUrl('/autre-page'); // Remplacez '/autre-page' par le chemin de redirection souhaité.
    }
  }
}
export const RoleGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree =>{
    return inject(RoleGuards).canActivate(route,state);
}
