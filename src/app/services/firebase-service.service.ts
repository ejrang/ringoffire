import { inject, Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  firestore = inject(Firestore)


 async getDocTest(){
    const docRef = doc(collection(this.firestore, "games"),"7iFbTRB3vuzdDgSqoeU0");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
     console.log("Document data:", docSnap.data());
    }else{
      console.log("No such document!");
    }
  }
}

