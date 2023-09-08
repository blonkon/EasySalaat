import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Users } from '../models/users';
import { Auth,signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  user? : Users | null;
  constructor(private firestore: Firestore,private auth: Auth) { 
   
   }

  //fonction pour ajouter un user 
  addUser(user : Users){
      const notesRef = collection(this.firestore, 'Users');
      return addDoc(notesRef, user);
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
