import { inject } from "@angular/core";
import { doc, Firestore, onSnapshot } from "firebase/firestore";



export class gameService{
  title = 'ringoffire';
  firestore: Firestore = inject(Firestore);

constructor(){
    const unsub = onSnapshot(doc(this.firestore, "games"), (doc) => {
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
        });
    }


}
