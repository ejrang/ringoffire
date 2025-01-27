import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
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
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;  
      this.game.playedCards.push(this.currentCard);
      console.log(this.game);
    
    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
   }
 }
    
}
