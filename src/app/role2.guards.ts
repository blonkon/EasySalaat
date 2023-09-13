import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
class RoleGuards {
  user: any;
  constructor(private router: Router,private dataservice : DataService, private auth: Auth,private firestore: Firestore) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise <boolean | UrlTree> {

    const user = await new Promise<User | null>((resolve) => {
      // Utilisez onAuthStateChanged pour obtenir l'état de connexion actuel.
      onAuthStateChanged(this.auth, resolve);
    });

    if (user) {
      //le user est connecter 
      //on recupere les donnee de ce dernier 
      const documentRef = doc(this.firestore, 'Users', user.uid);
      const firebaseUser = await getDoc(documentRef);
      if (firebaseUser.exists()) {
        this.user = firebaseUser.data();
      }
      const userRole = this.user.role;
      if (userRole > 1) {
        return this.router.parseUrl('/admin/accueilsuperadmin');
      } else {
        return this.router.parseUrl('/tabs/tab1'); 
      }
    } else {
      // Le User est deconnecter
      return this.router.parseUrl(''); 
    }

   
  }
}
export const RoleGuard2 : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise <boolean | UrlTree> =>{
    return inject(RoleGuards).canActivate(route,state);
}
