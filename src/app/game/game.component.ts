import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent,MatButtonModule,MatIconModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
  pickCardAnimation = false;
  game: Game = new Game;
  currentCard: string = '';
  
  
  constructor(){
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
    
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
   }
 }
    
}
