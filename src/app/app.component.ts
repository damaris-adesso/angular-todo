import { Component } from '@angular/core';

export interface ToDo {
  todo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todo: string = '';
  public title: string = 'Angular To do';
  public list: ToDo[] = [{ todo: 'clean the house' }, { todo: 'buy milk' }];

  public updateList(newTodo: string) {
    this.list = [...this.list, { todo: newTodo }];
  }

  public deleteFromList(index: number) {
    this.list.splice(index, 1);
  }
}
