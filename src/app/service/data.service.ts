import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection,doc, setDoc,getFirestore, getDoc } from '@angular/fire/firestore';
import { Users } from '../models/users';
import { Auth,signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,onAuthStateChanged } from '@angular/fire/auth';
import { Roles } from '../models/Roles.enum';
import { initializeApp } from '@angular/fire/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: any;
  // Invalidadd : string = "";
  test : boolean = false; 
  
  constructor(private firestore: Firestore,private auth: Auth,private router : Router) { 
   }

  //fonction pour ajouter un user 
  async addUser(user : Users){
      if (user.email!=undefined && user.motdepasse!=undefined) {
        await this.register(user.email,user.motdepasse).then((userCredential) => {
        if (userCredential) { const userr = userCredential.user;
          this.test=true
          // console.log(userr.uid)
          user.motdepasse="";
          const userRef = collection(this.firestore,'Users');
          setDoc(doc(userRef,userr.uid),user)
         
          // addDoc(notesRef, user);
           }
      })
  }
}
    async register(email:string, password:string) {
      try {
        const user = await createUserWithEmailAndPassword(this.auth, email, password).catch((error) => {
          if (error.code === 'auth/email-already-in-use'){
            this.test=false;
          //   this.Invalidadd="Email present"
           }else{
            this.test=true;
           }
      });
        return user;
      } catch (e) {
        return null;
      }
    }
    allMosques(){

    }
    async login(email:string, password:string ) {
      try {
        const user = await signInWithEmailAndPassword(this.auth, email, password) 
       if (user) {
          const documentRef = doc(this.firestore, 'Users', user.user.uid);
          const firebaseUser = await getDoc(documentRef);
          if (firebaseUser.exists()) {
            this.user = firebaseUser.data();
          }
          
        };
        return user;
      } catch (e) {
        return null;
      }
    }
    getUserById(id : string){

    }
    logout() {
       signOut(this.auth);
       return  this.router.navigate(['']);
      
    }
}
