import { CommonModule } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit{
  @Input() name: string | undefined;
  @Input() playerActive:boolean = false;

  ngOnInit(): void {
  }

}
