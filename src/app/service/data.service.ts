import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Users } from '../models/users';
import { Auth,signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut } from '@angular/fire/auth';
import { Roles } from '../models/Roles.enum';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  user?: Users;
  constructor(private firestore: Firestore,private auth: Auth) { 
   }

  //fonction pour ajouter un user 
  addUser(user : Users){
      if (user.email!=undefined && user.motdepasse!=undefined) {
        this.register(user.email,user.motdepasse);
      }
      user.motdepasse="";
      const notesRef = collection(this.firestore, 'Users');
      return addDoc(notesRef, user);
    }
    async register(email:string, password:string) {
      try {
        const user = await createUserWithEmailAndPassword(this.auth, email, password);
        return user;
      } catch (e) {
        return null;
      }
    }
    allMosques(){

    }
    async login(email:string, password:string ) {
      try {
        const user = await signInWithEmailAndPassword(this.auth, email, password);
        return user;
      } catch (e) {
        return null;
      }
    }
}
