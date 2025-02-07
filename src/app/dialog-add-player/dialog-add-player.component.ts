import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DialogAddPlayerComponent{
name:string = '';

 onNoClick(){

 }
}
