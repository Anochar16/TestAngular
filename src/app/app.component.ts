
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  todo! : string;


  addTextTodo($event:string):void{
    this.todo = $event

  }
}
