import { Component ,OnChanges,Input,} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  @Input() todo!: string;

  ngOnChanges(){
  this.addTodo(this.todo);
  }

  todoList=['eat','sleep']
addTodo(newTodo:string):void{
  if(newTodo){
    this.todoList.push(newTodo);
  }
}
  


}
