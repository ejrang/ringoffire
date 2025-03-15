import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-moblie',
  standalone: true,
  imports: [],
  templateUrl: './player-moblie.component.html',
  styleUrl: './player-moblie.component.scss'
})
export class PlayerMoblieComponent {
  @Input() name: string | undefined;
  @Input() playerActive:boolean = false;

}
