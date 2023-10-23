import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { PageutiletadminComponent } from './PageSuperAdmin/pageutiletadmin/pageutiletadmin.component';

@Injectable({
  providedIn: 'root',
})
class RoleGuards {
  user: any;
  constructor(private router: Router,private dataservice : DataService, private auth: Auth,private firestore: Firestore,private data : DataService) {}

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
        if (this.user.role===3) {
          this.data.superUser=true
        }
      }
      const userRole = this.user.role;
      if (userRole > 1) {
        //si ca commence par admin c'est bon 
        if (state.url === '/admin') {
          return this.router.parseUrl('/admin/accueilsuperadmin'); 
        }
        if (state.url.startsWith('/admin')) {
          return true; 
        }else if (state.url.startsWith('/tabs') || state.url.startsWith('/admosque')) {
          return this.router.parseUrl('/admin/accueilsuperadmin'); 
        }
        return this.router.parseUrl('/admin/accueilsuperadmin'); 
      } else if (userRole===0) {
        if (state.url.startsWith('/admin')|| state.url.startsWith('/admosque')) {
          return this.router.parseUrl('/tabs/tab1'); 
        }
        return this.router.parseUrl('/tabs/tab1'); 
      }else{
        if (state.url.startsWith('/admin') || state.url.startsWith('/tabs')) {
          return this.router.parseUrl('/admosque/page-accueil-admin-mosque'); 
        }
        return this.router.parseUrl('/admosque/page-accueil-admin-mosque'); 
      }
    } else {
      // Le User est deconnecter
      return this.router.parseUrl(''); 
    }

   
  }
}
export const RoleGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise <boolean | UrlTree> =>{
    return inject(RoleGuards).canActivate(route,state);
}
