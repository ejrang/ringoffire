import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from "../game-info/game-info.component";


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule, GameInfoComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit{
  pickCardAnimation = false;
  game: Game = new Game;
  currentCard: string = '';
  
  
  constructor(public dialog: MatDialog){
  }
  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game;
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop() ?? '';
      this.pickCardAnimation = true;  
      console.log(this.game);

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
   }
 }
    

 openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);

  dialogRef.afterClosed().subscribe((name: string) => {
    if(name && name.length > 0) {
      this.game.players.push(name);
    }
  
  });
}
}
