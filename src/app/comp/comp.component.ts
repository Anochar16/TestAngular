import { Component ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent {
  @Output() todoEvent = new EventEmitter<string>;
  todaList = '';

  sendTodo(value:string) {
    this.todoEvent.emit(value)
     //console.log(value)
  }
}
