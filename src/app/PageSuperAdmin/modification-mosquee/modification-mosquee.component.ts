import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MosqueService } from 'src/app/service/liste-mosque.service';
import { MosqueeService } from '../mosquee.service';
// import { Storage, getDownloadURL, ref, uploadString } from '@angular/fire/storage';
// import { Photo } from '@capacitor/camera';

@Component({
  selector: 'app-modification-mosquee',
  templateUrl: './modification-mosquee.component.html',
  styleUrls: ['./modification-mosquee.component.scss'],
})
export class ModificationMosqueeComponent  implements OnInit {
  mosqueName: string="";
  phoneNumber: number=0;
  imamName: string="";
  mosqueid:any;
  invalid :string="";
onImageChange($event: Event) {
throw new Error('Method not implemented.');
}
rechercher($event: Event) {
throw new Error('Method not implemented.');
}
ajouterMosquee() {
throw new Error('Method not implemented.');
}

  constructor(private router : Router,private firestore : Firestore,private service : MosqueeService) { }

  ngOnInit() {}

  // async uploadImage(cameraFile: Photo) {
	// 	// const path = `uploads/${this.mosqueid}/profile.webp`;
	// 	// const storageRef = ref(this.storage, path);

	// 	// try {
  //   //   if (cameraFile!==undefined) {
  //   //     // await uploadString(storageRef, cameraFile.base64String, 'base64');

  //   //   }
	// 	// 	const imageUrl = await getDownloadURL(storageRef);

	// 	// 	const userDocRef = doc(this.firestore, `Mosques/${this.mosqueid}`);
	// 	// 	await setDoc(userDocRef, {
	// 	// 		imageUrl
	// 	// 	});
	// 	// 	return true;
	// 	// } catch (e) {
	// 	// 	return null;
	// 	// }
	// }

  async onSubmit(form : NgForm){
    const regexNom = /^.{2,}$/;
    const regexspace = /^\s*$/;
    const regex1 = new RegExp(regexNom);
    const regex2 = new RegExp(regexspace);
      if (regex1.test(this.imamName)) {
        this.invalid="";
        if (regex1.test(this.mosqueName)) {
          this.invalid="";
            this.mosqueid = this.service.mosqueidForUpdate;
            // const path = `images/${this.mosqueid}/profile.webp`;
		        // const storageRef = ref(this.storage, path);
            
            const washingtonRef = doc(this.firestore, "Mosques", this.mosqueid);
            await updateDoc(washingtonRef, {
              tel: this.phoneNumber,
              nom: this.mosqueName,
              iman: this.imamName,
            });
    }
    else{
      this.invalid="Le nom de la mosque doit contenir au moin deux caracters";
      return;
  }
      } 
      else {
        this.invalid="Le nom de l'imam doit contenir au moin deux caracters";
        return;
      }
      // console.log(this.mosqueName)
      // console.log(this.imamName)
      // console.log(this.phoneNumber)
      this.router.navigate(["admin/accueilsuperadmin/mosquee"])
      
    } 
      
// const q = query(collection(this.firestore, "Users"), where("email", "==", this.mosqueid));
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach(async (docr) => {
  // console.log(docr.id, " => ", docr.data()); 
  // console.log((await getDoc(washingtonRef)).data())
    // await updateDoc(washingtonRef, {
    //   role: 1
    //   });
        //  this.mosque.admin_mail=this.mail
    //      const userRef = collection(this.firestore,'Mosques');
    //       setDoc(doc(userRef,docr.id),this.mosque)
  //   //   // this.mosque.admin_mail=this.mail
  //   // //  const userRef = collection(this.firestore,'Mosques');
  //   //   setDoc(doc(userRef,docr.id),this.mosque)
  // } else if (this.rolem==="utilisateur") {
  //   await updateDoc(washingtonRef, {
  //     role: 0
  //     });
    
  // } else if (this.rolem==="super-admin") {
  //   await updateDoc(washingtonRef, {
  //     role: 3
  //     });
  // }else{
  //   await updateDoc(washingtonRef, {
  //     role: 2
  //     });
// });

    // console.log(this.rolem)
    // console.log(this.mosqueid)
   
       
}