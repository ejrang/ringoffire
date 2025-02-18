import { inject, Injectable } from '@angular/core';
import { collection, CollectionReference, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  title: string = 'ringoffire';
  firestore: Firestore = inject(Firestore);
  setCollRef:CollectionReference = collection(this.firestore,"games")

  // constructor() { 
  //   console.log(doc(this.setCollRef,"vLlomPnUoHSgDbvZJPXb"));
    
  // }
}
