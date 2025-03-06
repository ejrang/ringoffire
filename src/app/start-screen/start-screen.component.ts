import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
fireService = inject(FirebaseServiceService)
  constructor(private router: Router, private firebaseService:FirebaseServiceService) {
    // this.ngOnInit()
  }

  async newGame() {
    // Start Game
    let game = new Game()
    const docRef = await addDoc(
      collection(this.firebaseService.firestore, "games"),
      game.toJson()).then((gameInfo: any) => {
        console.log(gameInfo);
        
        this.router.navigateByUrl('/game/' + gameInfo.id);
      })

  }

  ngOnInit(){
    this.fireService.getDocTest();
  }
}

