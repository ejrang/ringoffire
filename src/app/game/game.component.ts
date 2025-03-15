import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from "../game-info/game-info.component";
import { FirebaseServiceService } from '../services/firebase-service.service';
import { addDoc, collection, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PlayerMoblieComponent } from "../player-moblie/player-moblie.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule, GameInfoComponent, PlayerMoblieComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit{
  game: Game = new Game;
  gameId!: string;
  constructor(private route: ActivatedRoute,private firebaseService: FirebaseServiceService,public dialog: MatDialog){

  }
  unsub: any;

  ngOnInit(): void {
    this.newGame(); 
    console.log(this.game);
    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
        this.unsub = onSnapshot(
        doc(this.firebaseService.firestore, "games", this.gameId), 
        (game: any) => {
          console.log( game);
         this.game.currentPlayer = game.data().currentPlayer;
         this.game.playedCards = game.data().playedCards;
         this.game.players = game.data().players;
         this.game.stack = game.data().stack;
         console.log(this.game);
        });
    })
  }

  async newGame(){
    this.game = new Game;
}

  takeCard() {
    if(!this.game.pickCardAnimation && this.game.stack){
      this.game.currentCard = this.game.stack.pop() ?? '';
      this.game.pickCardAnimation = true;     
      console.log(this.game);
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.updateGame();
    
    setTimeout(() => {
      this.game.playedCards.push(this.game.currentCard);
      this.game.pickCardAnimation = false;
      this.updateGame(); 
    }, 1000);
   }
 }
    

 openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);

  dialogRef.afterClosed().subscribe((name: string) => {
    if(name && name.length > 0) {
      this.game.players.push(name);
      this.updateGame();
    }
  });
}

async updateGame(){
  if(this.gameId){
    await updateDoc(this.getGamesRef(),
    this.game.toJson())
  }
 }

 async addDoc(){
  await addDoc(collection(this.firebaseService.firestore, "games"),this.game.toJson)
 }

 getGamesRef(){
  return doc(this.firebaseService.firestore, "games", this.gameId)
 }
}
