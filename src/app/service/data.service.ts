import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Users } from '../models/users';
import { Auth,signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut } from '@angular/fire/auth';
import { Roles } from '../models/Roles.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: Users=
  {
   
  };
   db = getFirestore();
  constructor(private firestore: Firestore,private auth: Auth) { 
    this.addUser(this.user);
    
   }

  //fonction pour ajouter un user 
  addUser(user : Users){
      if (user.email!=undefined && user.motdepasse!=undefined) {
        this.register(user.email,user.motdepasse).then((userCredential) => {
        if (userCredential) { const userr = userCredential.user;
          console.log(userr.uid)
          user.motdepasse="";
          // const notesRef = collection(this.firestore, 'Users');
          setDoc(doc(this.firestore,"Users",userr.uid),{
            nom : "",
            prenom : "",
            numero : 77318772,
            email : "test1@gmail.com",
            motdepasse : "testtest",
            role : Roles.ADMIN_M
          })
          // addDoc(notesRef, user);
           }
      })
    }
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
    getUserById(id : string){

    }
}
