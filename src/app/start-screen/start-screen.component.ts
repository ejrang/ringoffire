import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
fireService = inject(FirebaseServiceService)
  constructor(private router: Router) {
    // this.ngOnInit()
  }

  newGame() {
    // Start Game
    this.router.navigateByUrl('/game');
  }

  ngOnInit(){
    this.fireService.getDocTest();
  }
}

